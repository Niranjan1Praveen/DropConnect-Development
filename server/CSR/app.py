import pandas as pd
import numpy as np
import plotly.graph_objs as go
from dash import Dash, dcc, html
from flask import Flask
from flask_cors import CORS
import os

# Configure dark theme for all plots
dark_template = go.layout.Template(
    layout=go.Layout(
        paper_bgcolor='#1e1e1e',
        plot_bgcolor='#1e1e1e',
        font={'color': '#e0e0e0'},
        xaxis={'gridcolor': '#333', 'linecolor': '#444'},
        yaxis={'gridcolor': '#333', 'linecolor': '#444'},
        colorway=['#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#FFC107'],
        coloraxis={'colorbar': {'tickfont': {'color': '#e0e0e0'}}},
        legend={'font': {'color': '#e0e0e0'}},
        title={'font': {'color': '#ffffff'}}
    )
)

# Flask server
server = Flask(__name__)
CORS(server)
# Dash app with dark theme
app = Dash(__name__, server=server, use_pages=False, suppress_callback_exceptions=True)
app.title = "Combined CSR Dashboard"

# Load datasets
def load_data():
    data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')
    return {
        'aurevia': pd.read_csv(os.path.join(data_dir, 'AureviaInternationalHoldings.csv')),
        'csr_main': pd.read_csv(os.path.join(data_dir, 'CSR_Main_Table.csv')),
        'noventra': pd.read_csv(os.path.join(data_dir, 'NoventraTechnologiesInc.csv')),
        'trionyx': pd.read_csv(os.path.join(data_dir, 'TrionyxSystemsWorldwide.csv')),
        'veltrix': pd.read_csv(os.path.join(data_dir, 'VeltrixGlobalSolutions.csv')),
        'zentara': pd.read_csv(os.path.join(data_dir, 'ZentaraDynamicsCorporation.csv'))
    }

data = load_data()

# --- Aurevia Graphs ---
def aurevia_graphs():
    df = pd.merge(data['aurevia'], data['csr_main'][['EventID', 'CorporateSponsor', 'DateOfImplementation']], on='EventID', how='left')
    
    fig1 = go.Figure([go.Bar(
        x=df.groupby('CorporateSponsor')['TreesPlanted'].sum().index,
        y=df.groupby('CorporateSponsor')['TreesPlanted'].sum().values,
        marker_color='#4CAF50'
    )])
    fig1.update_layout(
        title="Total Trees Planted by Corporate Sponsor", 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig2 = go.Figure([go.Scatter(
        x=df['DateOfImplementation'], 
        y=df['TreesPlanted'], 
        mode='markers',
        marker_color='#2196F3'
    )])
    fig2.update_layout(
        title="Trees Planted Over Time", 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig3 = go.Figure([go.Scatter(
        x=df['TreesPlanted'], 
        y=df['SaplingSurvivalRatePercent'], 
        mode='markers',
        marker_color='#FF5722'
    )])
    fig3.update_layout(
        title="Trees Planted vs. Sapling Survival Rate", 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig4 = go.Figure([go.Histogram(
        x=df['SpeciesDiversityCount'],
        marker_color='#9C27B0'
    )])
    fig4.update_layout(
        title="Species Diversity Count Distribution", 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    geo_counts = df['GeoTaggingEnabled'].value_counts()
    fig5 = go.Figure([go.Pie(
        labels=geo_counts.index, 
        values=geo_counts.values,
        marker_colors=['#4CAF50', '#FF5722']
    )])
    fig5.update_layout(
        title="GeoTagging Enabled", 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    return [
        dcc.Graph(figure=fig1, className='dash-graph'),
        dcc.Graph(figure=fig2, className='dash-graph'),
        dcc.Graph(figure=fig3, className='dash-graph'),
        dcc.Graph(figure=fig4, className='dash-graph'),
        dcc.Graph(figure=fig5, className='dash-graph'),
    ]

# --- Noventra Graphs ---
def noventra_graphs():
    df = data['noventra'].copy()
    cols = ['AreaRestoredSqM', 'NativeFloraPlanted', 'WasteRemovedKg',
            'BiodiversitySpeciesCount', 'WaterQualityImprovementScore']
    df[cols] = df[cols].apply(pd.to_numeric, errors='coerce')
    numeric_df = df[cols]

    fig1 = go.Figure(data=go.Heatmap(
        z=numeric_df.corr().values,
        x=numeric_df.corr().columns,
        y=numeric_df.corr().index,
        colorscale='Viridis'
    ))
    fig1.update_layout(
        title='Correlation Heatmap', 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig2 = go.Figure([go.Scatter(
        y=df['NativeFloraPlanted'].cumsum(), 
        mode='lines+markers',
        line_color='#4CAF50'
    )])
    fig2.update_layout(
        title='Cumulative Native Flora Planted', 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    top10 = df.nlargest(10, 'WasteRemovedKg')
    fig3 = go.Figure([go.Bar(
        x=top10['EventID'].astype(str), 
        y=top10['WasteRemovedKg'], 
        orientation='v',
        marker_color='#2196F3'
    )])
    fig3.update_layout(
        title='Top 10 Events by Waste Removed', 
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    norm = df[cols].sum() / df[cols].sum().max()
    values = norm.tolist() + [norm.tolist()[0]]
    angles = np.linspace(0, 2*np.pi, len(norm)+1)
    fig4 = go.Figure(data=go.Scatterpolar(
        r=values, 
        theta=cols + [cols[0]], 
        fill='toself',
        line_color='#FF5722'
    ))
    fig4.update_layout(
        title='Radar Chart of Normalized Metrics', 
        polar=dict(radialaxis=dict(visible=True)),
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    changes = df.sort_values('EventID')[['AreaRestoredSqM']].diff().fillna(df[['AreaRestoredSqM']])
    fig5 = go.Figure()
    cum = 0
    for i, ch in enumerate(changes['AreaRestoredSqM']):
        fig5.add_trace(go.Bar(
            x=[df['EventID'].iloc[i]], 
            y=[ch], 
            base=[cum],
            marker_color='#4CAF50' if ch >= 0 else '#FF5722'
        ))
        cum += ch
    fig5.update_layout(
        title="Sequential Change in Area Restored",
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2, fig3, fig4, fig5]]

# --- Trionyx Graphs ---
def trionyx_graphs():
    df = data['trionyx'].copy()
    cols = ['TankersSupplied', 'WaterDeliveredLiters', 'HouseholdsReached', 
            'WaterDistributionPoints', 'HygieneKitsDistributed']
    df[cols] = df[cols].apply(pd.to_numeric, errors='coerce')

    fig1 = go.Figure()
    for col in cols:
        fig1.add_trace(go.Histogram(
            x=df[col], 
            name=col, 
            opacity=0.75,
            marker_color='#4CAF50'
        ))
    fig1.update_layout(
        barmode='overlay', 
        title='Distributions of Impact Metrics',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig2 = go.Figure([go.Scatter(
        x=df['EventID'].astype(str), 
        y=df['HygieneKitsDistributed'], 
        mode='markers+lines',
        line_color='#2196F3'
    )])
    fig2.update_layout(
        title='Hygiene Kits Distributed by Event',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2]]

# --- Veltrix Graphs ---
def veltrix_graphs():
    df = data['veltrix'].copy()
    df['MockDrillsConducted'] = 100  # All 100 for demo
    num_cols = df.select_dtypes(include='number').columns.tolist()

    fig1 = go.Figure([go.Bar(
        x=num_cols, 
        y=df[num_cols].sum(),
        marker_color='#4CAF50'
    )])
    fig1.update_layout(
        title='Total Impact Metrics',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig2 = go.Figure()
    for col in num_cols:
        fig2.add_trace(go.Scatter(
            x=df.index, 
            y=df[col], 
            name=col,
            line_color='#2196F3'
        ))
    fig2.update_layout(
        title='Trends of All Metrics Over Events',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig3 = go.Figure()
    for col in num_cols:
        fig3.add_trace(go.Box(
            y=df[col], 
            name=col,
            marker_color='#FF5722'
        ))
    fig3.update_layout(
        title='Box Plot of Impact Metrics',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig4 = go.Figure([go.Scatter(
        x=df[num_cols[0]], 
        y=df[num_cols[1]], 
        mode='markers',
        marker_color='#9C27B0'
    )])
    fig4.update_layout(
        title=f'{num_cols[0]} vs {num_cols[1]}',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2, fig3, fig4]]

# --- Zentara Graphs ---
def zentara_graphs():
    df = data['zentara'].copy()
    df[['PitsInstalled', 'EstimatedStorageLitersPerMonth']] = df[[
        'PitsInstalled', 'EstimatedStorageLitersPerMonth'
    ]].apply(pd.to_numeric, errors='coerce')

    grouped = df.groupby('StructureType')[['PitsInstalled', 'EstimatedStorageLitersPerMonth']].mean()
    fig1 = go.Figure()
    fig1.add_trace(go.Bar(
        name='Avg Pits Installed', 
        x=grouped.index, 
        y=grouped['PitsInstalled'],
        marker_color='#4CAF50'
    ))
    fig1.add_trace(go.Bar(
        name='Avg Storage Capacity', 
        x=grouped.index, 
        y=grouped['EstimatedStorageLitersPerMonth'],
        marker_color='#2196F3'
    ))
    fig1.update_layout(
        barmode='group', 
        title='Average Pits & Storage by Structure',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig2 = go.Figure([go.Histogram(
        x=df['PitsInstalled'],
        marker_color='#FF5722'
    )])
    fig2.update_layout(
        title='Distribution of Pits Installed',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig3 = go.Figure([go.Scatter(
        x=df['PitsInstalled'], 
        y=df['EstimatedStorageLitersPerMonth'], 
        mode='markers',
        marker_color='#9C27B0'
    )])
    fig3.update_layout(
        title='Pits vs Storage Capacity',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig4 = go.Figure()
    fig4.add_trace(go.Scatter(
        x=df.index, 
        y=df['PitsInstalled'], 
        mode='lines+markers', 
        name='PitsInstalled',
        line_color='#4CAF50'
    ))
    fig4.add_trace(go.Scatter(
        x=df.index, 
        y=df['EstimatedStorageLitersPerMonth'], 
        mode='lines+markers', 
        name='StorageCapacity',
        line_color='#2196F3'
    ))
    fig4.update_layout(
        title='Trend of Pits and Storage Over Events',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    fig5 = go.Figure([go.Pie(
        labels=df['StructureType'].value_counts().index,
        values=df['StructureType'].value_counts().values,
        marker_colors=['#4CAF50', '#2196F3', '#FF5722', '#9C27B0']
    )])
    fig5.update_layout(
        title='Structure Type Distribution',
        template=dark_template,
        margin=dict(l=40, r=40, t=60, b=40)
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2, fig3, fig4, fig5]]

# ----- Dash Layout -----
app.layout = html.Div([
    html.H1("Combined CSR Dashboard", style={'textAlign': 'center', 'color': '#ffffff'}),
    dcc.Tabs([
        dcc.Tab(
            label='Aurevia International Holdings', 
            children=aurevia_graphs(),
            style={'backgroundColor': '#2d2d2d', 'color': '#b0b0b0'},
            selected_style={'backgroundColor': '#333', 'color': '#ffffff'}
        ),
        dcc.Tab(
            label='Noventra Technologies Inc', 
            children=noventra_graphs(),
            style={'backgroundColor': '#2d2d2d', 'color': '#b0b0b0'},
            selected_style={'backgroundColor': '#333', 'color': '#ffffff'}
        ),
        dcc.Tab(
            label='Trionyx Systems Worldwide', 
            children=trionyx_graphs(),
            style={'backgroundColor': '#2d2d2d', 'color': '#b0b0b0'},
            selected_style={'backgroundColor': '#333', 'color': '#ffffff'}
        ),
        dcc.Tab(
            label='Veltrix Global Solutions', 
            children=veltrix_graphs(),
            style={'backgroundColor': '#2d2d2d', 'color': '#b0b0b0'},
            selected_style={'backgroundColor': '#333', 'color': '#ffffff'}
        ),
        dcc.Tab(
            label='Zentara Dynamics Corporation', 
            children=zentara_graphs(),
            style={'backgroundColor': '#2d2d2d', 'color': '#b0b0b0'},
            selected_style={'backgroundColor': '#333', 'color': '#ffffff'}
        )
    ], colors={
        'border': '#333',
        'primary': '#4CAF50',
        'background': '#2d2d2d'
    }),
], style={
    'backgroundColor': '#121212',
    'padding': '20px',
    'minHeight': '100vh'
})

if __name__ == '__main__':
    app.run(debug=True)
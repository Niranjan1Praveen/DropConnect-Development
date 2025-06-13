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
        font={'color': '#e0e0e0', 'family': 'Arial'},
        xaxis={'gridcolor': '#333', 'linecolor': '#444', 'title_font': {'size': 14}},
        yaxis={'gridcolor': '#333', 'linecolor': '#444', 'title_font': {'size': 14}},
        colorway=['#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#FFC107'],
        coloraxis={'colorbar': {'tickfont': {'color': '#e0e0e0'}}},
        legend={'font': {'color': '#e0e0e0'}, 'orientation': 'h', 'y': -0.2},
        title={'font': {'color': '#ffffff', 'size': 18}, 'x': 0.5, 'xanchor': 'center'},
        margin={'l': 60, 'r': 60, 't': 80, 'b': 60},
        hoverlabel={'font': {'color': '#121212'}}
    )
)

# Flask server
server = Flask(__name__)
CORS(server)
# Dash app with dark theme
app = Dash(__name__, server=server, use_pages=False, suppress_callback_exceptions=True)
app.title = "NGO Impact Dashboard"

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

# --- Assam NGO (Veltrix) Graphs ---
def assam_ngo_graphs():
    df = data['veltrix'].copy()
    df['MockDrillsConducted'] = 100  # All 100 for demo
    num_cols = df.select_dtypes(include='number').columns.tolist()

    fig1 = go.Figure([go.Bar(
        x=num_cols, 
        y=df[num_cols].sum(),
        marker_color='#4CAF50',
        text=df[num_cols].sum(),
        textposition='auto'
    )])
    fig1.update_layout(
        title='Total Impact Metrics - Assam NGO',
        template=dark_template
    )

    fig2 = go.Figure()
    for col in num_cols:
        fig2.add_trace(go.Scatter(
            x=df.index, 
            y=df[col], 
            name=col.replace('_', ' ').title(),
            line={'width': 3}
        ))
    fig2.update_layout(
        title='Trends of All Metrics Over Events',
        template=dark_template
    )

    fig3 = go.Figure()
    for col in num_cols:
        fig3.add_trace(go.Box(
            y=df[col], 
            name=col.replace('_', ' ').title(),
            marker_color='#2196F3'
        ))
    fig3.update_layout(
        title='Box Plot of Impact Metrics',
        template=dark_template
    )

    fig4 = go.Figure([go.Scatter(
        x=df[num_cols[0]], 
        y=df[num_cols[1]], 
        mode='markers',
        marker={'size': 12, 'color': '#FF5722'},
        hovertext=df['EventID']
    )])
    fig4.update_layout(
        title=f'{num_cols[0].replace("_", " ").title()} vs {num_cols[1].replace("_", " ").title()}',
        template=dark_template,
        xaxis_title=num_cols[0].replace('_', ' ').title(),
        yaxis_title=num_cols[1].replace('_', ' ').title()
    )

    return [
        dcc.Graph(figure=fig1, className='dash-graph'),
        dcc.Graph(figure=fig2, className='dash-graph'),
        dcc.Graph(figure=fig3, className='dash-graph'),
        dcc.Graph(figure=fig4, className='dash-graph')
    ]

# --- West Bengal NGO (Noventra) Graphs ---
def west_bengal_ngo_graphs():
    df = data['noventra'].copy()
    cols = ['AreaRestoredSqM', 'NativeFloraPlanted', 'WasteRemovedKg',
            'BiodiversitySpeciesCount', 'WaterQualityImprovementScore']
    df[cols] = df[cols].apply(pd.to_numeric, errors='coerce')
    numeric_df = df[cols]

    fig1 = go.Figure(data=go.Heatmap(
        z=numeric_df.corr().values,
        x=numeric_df.corr().columns,
        y=numeric_df.corr().index,
        colorscale='Viridis',
        hoverongaps=False
    ))
    fig1.update_layout(
        title='Correlation Heatmap - West Bengal NGO',
        template=dark_template
    )

    fig2 = go.Figure([go.Scatter(
        y=df['NativeFloraPlanted'].cumsum(), 
        mode='lines+markers',
        line={'color': '#4CAF50', 'width': 3},
        marker={'size': 8}
    )])
    fig2.update_layout(
        title='Cumulative Native Flora Planted',
        template=dark_template,
        yaxis_title='Cumulative Native Flora Planted'
    )

    top10 = df.nlargest(10, 'WasteRemovedKg')
    fig3 = go.Figure([go.Bar(
        x=top10['EventID'].astype(str), 
        y=top10['WasteRemovedKg'], 
        marker_color='#2196F3',
        text=top10['WasteRemovedKg'],
        textposition='auto'
    )])
    fig3.update_layout(
        title='Top 10 Events by Waste Removed (kg)',
        template=dark_template,
        xaxis_title='Event ID',
        yaxis_title='Waste Removed (kg)'
    )

    norm = df[cols].sum() / df[cols].sum().max()
    values = norm.tolist() + [norm.tolist()[0]]
    angles = np.linspace(0, 2*np.pi, len(norm)+1)
    fig4 = go.Figure(data=go.Scatterpolar(
        r=values, 
        theta=[col.replace('_', ' ').title() for col in cols] + [cols[0].replace('_', ' ').title()], 
        fill='toself',
        line={'color': '#FF5722'}
    ))
    fig4.update_layout(
        title='Radar Chart of Normalized Metrics',
        polar={'radialaxis': {'visible': True}},
        template=dark_template
    )

    changes = df.sort_values('EventID')[['AreaRestoredSqM']].diff().fillna(df[['AreaRestoredSqM']])
    fig5 = go.Figure()
    cum = 0
    for i, ch in enumerate(changes['AreaRestoredSqM']):
        fig5.add_trace(go.Bar(
            x=[df['EventID'].iloc[i]], 
            y=[ch], 
            base=[cum],
            marker_color='#4CAF50' if ch >= 0 else '#FF5722',
            text=f"{ch:+.1f}",
            textposition='auto'
        ))
        cum += ch
    fig5.update_layout(
        title="Sequential Change in Area Restored (sqm)",
        template=dark_template,
        xaxis_title='Event ID',
        yaxis_title='Change in Area Restored (sqm)'
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2, fig3, fig4, fig5]]

# --- Rajasthan NGO (Aurevia) Graphs ---
def rajasthan_ngo_graphs():
    df = pd.merge(data['aurevia'], data['csr_main'][['EventID', 'CorporateSponsor', 'DateOfImplementation']], on='EventID', how='left')
    
    fig1 = go.Figure([go.Bar(
        x=df.groupby('CorporateSponsor')['TreesPlanted'].sum().index,
        y=df.groupby('CorporateSponsor')['TreesPlanted'].sum().values,
        marker_color='#4CAF50',
        text=df.groupby('CorporateSponsor')['TreesPlanted'].sum().values,
        textposition='auto'
    )])
    fig1.update_layout(
        title="Total Trees Planted by Corporate Sponsor - Rajasthan NGO",
        template=dark_template,
        xaxis_title='Corporate Sponsor',
        yaxis_title='Trees Planted'
    )

    fig2 = go.Figure([go.Scatter(
        x=df['DateOfImplementation'], 
        y=df['TreesPlanted'], 
        mode='markers',
        marker={'color': '#2196F3', 'size': 12},
        hovertext=df['CorporateSponsor']
    )])
    fig2.update_layout(
        title="Trees Planted Over Time",
        template=dark_template,
        xaxis_title='Date of Implementation',
        yaxis_title='Trees Planted'
    )

    fig3 = go.Figure([go.Scatter(
        x=df['TreesPlanted'], 
        y=df['SaplingSurvivalRatePercent'], 
        mode='markers',
        marker={'color': '#FF5722', 'size': 12},
        hovertext=df['EventID']
    )])
    fig3.update_layout(
        title="Trees Planted vs. Sapling Survival Rate",
        template=dark_template,
        xaxis_title='Trees Planted',
        yaxis_title='Sapling Survival Rate (%)'
    )

    fig4 = go.Figure([go.Histogram(
        x=df['SpeciesDiversityCount'],
        marker_color='#9C27B0',
        nbinsx=20
    )])
    fig4.update_layout(
        title="Species Diversity Count Distribution",
        template=dark_template,
        xaxis_title='Species Diversity Count',
        yaxis_title='Frequency'
    )

    geo_counts = df['GeoTaggingEnabled'].value_counts()
    fig5 = go.Figure([go.Pie(
        labels=geo_counts.index, 
        values=geo_counts.values,
        marker_colors=['#4CAF50', '#FF5722'],
        hole=0.4,
        textinfo='label+percent'
    )])
    fig5.update_layout(
        title="GeoTagging Enabled",
        template=dark_template
    )

    return [
        dcc.Graph(figure=fig1, className='dash-graph'),
        dcc.Graph(figure=fig2, className='dash-graph'),
        dcc.Graph(figure=fig3, className='dash-graph'),
        dcc.Graph(figure=fig4, className='dash-graph'),
        dcc.Graph(figure=fig5, className='dash-graph'),
    ]

# --- Tamil Nadu NGO (Zentara) Graphs ---
def tamil_nadu_ngo_graphs():
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
        marker_color='#4CAF50',
        text=grouped['PitsInstalled'].round(1),
        textposition='auto'
    ))
    fig1.add_trace(go.Bar(
        name='Avg Storage Capacity', 
        x=grouped.index, 
        y=grouped['EstimatedStorageLitersPerMonth'],
        marker_color='#2196F3',
        text=grouped['EstimatedStorageLitersPerMonth'].round(1),
        textposition='auto'
    ))
    fig1.update_layout(
        barmode='group', 
        title='Average Pits & Storage by Structure - Tamil Nadu NGO',
        template=dark_template,
        xaxis_title='Structure Type',
        yaxis_title='Average Value'
    )

    fig2 = go.Figure([go.Histogram(
        x=df['PitsInstalled'],
        marker_color='#FF5722',
        nbinsx=20
    )])
    fig2.update_layout(
        title='Distribution of Pits Installed',
        template=dark_template,
        xaxis_title='Pits Installed',
        yaxis_title='Frequency'
    )

    fig3 = go.Figure([go.Scatter(
        x=df['PitsInstalled'], 
        y=df['EstimatedStorageLitersPerMonth'], 
        mode='markers',
        marker={'color': '#9C27B0', 'size': 12},
        hovertext=df['StructureType']
    )])
    fig3.update_layout(
        title='Pits vs Storage Capacity',
        template=dark_template,
        xaxis_title='Pits Installed',
        yaxis_title='Estimated Storage (Liters/Month)'
    )

    fig4 = go.Figure()
    fig4.add_trace(go.Scatter(
        x=df.index, 
        y=df['PitsInstalled'], 
        mode='lines+markers', 
        name='Pits Installed',
        line={'color': '#4CAF50', 'width': 3},
        marker={'size': 8}
    ))
    fig4.add_trace(go.Scatter(
        x=df.index, 
        y=df['EstimatedStorageLitersPerMonth'], 
        mode='lines+markers', 
        name='Storage Capacity',
        line={'color': '#2196F3', 'width': 3},
        marker={'size': 8}
    ))
    fig4.update_layout(
        title='Trend of Pits and Storage Over Events',
        template=dark_template,
        xaxis_title='Event Index',
        yaxis_title='Value'
    )

    fig5 = go.Figure([go.Pie(
        labels=df['StructureType'].value_counts().index,
        values=df['StructureType'].value_counts().values,
        marker_colors=['#4CAF50', '#2196F3', '#FF5722', '#9C27B0'],
        hole=0.3,
        textinfo='label+percent'
    )])
    fig5.update_layout(
        title='Structure Type Distribution',
        template=dark_template
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2, fig3, fig4, fig5]]

# --- Maharashtra NGO (Trionyx) Graphs ---
def maharashtra_ngo_graphs():
    df = data['trionyx'].copy()
    cols = ['TankersSupplied', 'WaterDeliveredLiters', 'HouseholdsReached', 
            'WaterDistributionPoints', 'HygieneKitsDistributed']
    df[cols] = df[cols].apply(pd.to_numeric, errors='coerce')

    fig1 = go.Figure()
    colors = ['#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#FFC107']
    for i, col in enumerate(cols):
        fig1.add_trace(go.Histogram(
            x=df[col], 
            name=col.replace('_', ' ').title(),
            opacity=0.7,
            marker_color=colors[i]
        ))
    fig1.update_layout(
        barmode='overlay', 
        title='Distributions of Impact Metrics - Maharashtra NGO',
        template=dark_template,
        xaxis_title='Value',
        yaxis_title='Frequency'
    )

    fig2 = go.Figure([go.Scatter(
        x=df['EventID'].astype(str), 
        y=df['HygieneKitsDistributed'], 
        mode='markers+lines',
        line={'color': '#4CAF50', 'width': 3},
        marker={'size': 10}
    )])
    fig2.update_layout(
        title='Hygiene Kits Distributed by Event',
        template=dark_template,
        xaxis_title='Event ID',
        yaxis_title='Hygiene Kits Distributed'
    )

    return [dcc.Graph(figure=f, className='dash-graph') for f in [fig1, fig2]]

# ----- Dash Layout -----
app.layout = html.Div([
    html.H1("NGO Impact Dashboard", style={
        'textAlign': 'center',
        'color': '#ffffff',
        'marginBottom': '30px',
        'fontFamily': 'Arial'
    }),
    dcc.Tabs(id="state-tabs", value='assam', children=[
        dcc.Tab(
            label='Assam NGO', 
            value='assam',
            children=assam_ngo_graphs(),
            style={
                'backgroundColor': '#2d2d2d',
                'color': '#b0b0b0',
                'padding': '10px',
                'fontWeight': 'bold'
            },
            selected_style={
                'backgroundColor': '#333',
                'color': '#ffffff',
                'borderTop': '3px solid #4CAF50'
            }
        ),
        dcc.Tab(
            label='West Bengal NGO', 
            value='west_bengal',
            children=west_bengal_ngo_graphs(),
            style={
                'backgroundColor': '#2d2d2d',
                'color': '#b0b0b0',
                'padding': '10px',
                'fontWeight': 'bold'
            },
            selected_style={
                'backgroundColor': '#333',
                'color': '#ffffff',
                'borderTop': '3px solid #2196F3'
            }
        ),
        dcc.Tab(
            label='Rajasthan NGO', 
            value='rajasthan',
            children=rajasthan_ngo_graphs(),
            style={
                'backgroundColor': '#2d2d2d',
                'color': '#b0b0b0',
                'padding': '10px',
                'fontWeight': 'bold'
            },
            selected_style={
                'backgroundColor': '#333',
                'color': '#ffffff',
                'borderTop': '3px solid #FF5722'
            }
        ),
        dcc.Tab(
            label='Tamil Nadu NGO', 
            value='tamil_nadu',
            children=tamil_nadu_ngo_graphs(),
            style={
                'backgroundColor': '#2d2d2d',
                'color': '#b0b0b0',
                'padding': '10px',
                'fontWeight': 'bold'
            },
            selected_style={
                'backgroundColor': '#333',
                'color': '#ffffff',
                'borderTop': '3px solid #9C27B0'
            }
        ),
        dcc.Tab(
            label='Maharashtra NGO', 
            value='maharashtra',
            children=maharashtra_ngo_graphs(),
            style={
                'backgroundColor': '#2d2d2d',
                'color': '#b0b0b0',
                'padding': '10px',
                'fontWeight': 'bold'
            },
            selected_style={
                'backgroundColor': '#333',
                'color': '#ffffff',
                'borderTop': '3px solid #FFC107'
            }
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
    app.run(debug=True, port=9050)
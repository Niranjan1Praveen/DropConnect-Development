from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    lat = data['latitude']
    lon = data['longitude']
#demo values
    vegetation_index = round(random.uniform(0.1, 0.9), 2)
    water_index = round(random.uniform(0.0, 0.8), 2)
    elevation = random.randint(0, 500)
    urban_proximity = round(random.uniform(0, 100), 2)

    is_deforested = vegetation_index < 0.3
    is_flood_prone = elevation < 100 and urban_proximity < 20
    is_water_stressed = water_index < 0.2

    score = round(
        0.4 * vegetation_index +
        0.3 * water_index +
        0.2 * (1 - elevation / 500) +
        0.1 * (1 - urban_proximity / 100), 2
    )

    issues = []
    if is_deforested: issues.append("deforested")
    if is_flood_prone: issues.append("flood-prone")
    if is_water_stressed: issues.append("water-stressed")

    recommendation = (
        "Suitable for NGO interventions."
        if not issues else
        f"Region identified as {', '.join(issues)}. Consider caution."
    )

    return jsonify({
        "latitude": lat,
        "longitude": lon,
        "score": score,
        "vegetation_index": vegetation_index,
        "water_index": water_index,
        "elevation": elevation,
        "urban_proximity": urban_proximity,
        "recommendation": recommendation
    })

if __name__ == '__main__':
    app.run(debug=True)

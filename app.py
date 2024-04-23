from flask import Flask, render_template, jsonify
import pandas as pd
from sklearn.cluster import KMeans
import json

def kmeansClustering():
    schoolData = pd.read_csv("./static/school_locations.csv")
    xCoord = schoolData['xcoord'].values
    yCoord = schoolData['ycoord'].values
    names = schoolData['Name'].tolist()
    coord = list(zip(xCoord, yCoord))

    k = 4  # Number of clusters
    kmeans = KMeans(n_clusters=k).fit(coord)

    # Get cluster centers as lists
    cluster_centers = kmeans.cluster_centers_.tolist()

    # Get cluster labels as lists
    labels = kmeans.labels_.tolist()

    return {
        'cluster_centers': cluster_centers,
        'labels': labels,
        'coords': coord,
        'names': names
    }


app = Flask(__name__)

@app.route("/") 
def index(): 
    return render_template("index.html")

@app.route('/api/call_python_function', methods=['GET'])
def call_python_function():
    result = kmeansClustering()
    return jsonify(result=result)

if __name__ == "__main__":
    app.run(debug=True)
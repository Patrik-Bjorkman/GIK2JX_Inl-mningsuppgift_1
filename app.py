from flask import Flask, render_template, jsonify
import pandas as pd
from sklearn.cluster import KMeans
import json
import matplotlib.pyplot as plt

def elbowMethod():
    schoolData = pd.read_csv("./static/school_locations.csv")
    xCoord = schoolData['xcoord'].values
    yCoord = schoolData['ycoord'].values
    X = list(zip(xCoord, yCoord))

    sse = []
    for k in range(1, 11):
        kmeans = KMeans(n_clusters=k, n_init=10)
        
        kmeans.fit(X)
        sse.append(kmeans.inertia_)

    plt.figure(figsize=(6, 6))
    plt.plot(range(1, 11), sse, '-o')
    plt.xlabel('Number of Clusters (k)')
    plt.ylabel('Sum of Squared Errors (SSE)')
    plt.show()

def kmeansClustering():
    schoolData = pd.read_csv("./static/school_locations.csv")
    xCoord = schoolData['xcoord'].values
    yCoord = schoolData['ycoord'].values
    names = schoolData['Name'].tolist()
    coord = list(zip(xCoord, yCoord))

    k = 7  
    kmeans = KMeans(n_clusters=k).fit(coord)

    cluster_centers = kmeans.cluster_centers_.tolist()

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

@app.route('/api/kmeansClustering', methods=['GET'])
def call_python_function():
    result = kmeansClustering()
    return jsonify(result=result)

@app.route('/api/elbowMethod')
def call_elbow_function():
    elbowMethod()
    return

if __name__ == "__main__":
    app.run(debug=True)
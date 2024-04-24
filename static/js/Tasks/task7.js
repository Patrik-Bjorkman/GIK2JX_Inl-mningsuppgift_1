mymap = window.mymap;

var blackIcon = L.icon({
  iconUrl: "static/js/markers/blackMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var blueIcon = L.icon({
  iconUrl: "static/js/markers/blueMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});

var greenIcon = L.icon({
  iconUrl: "static/js/markers/greenMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var orangeIcon = L.icon({
  iconUrl: "static/js/markers/orangeMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var pinkIcon = L.icon({
  iconUrl: "static/js/markers/pinkMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var purpleIcon = L.icon({
  iconUrl: "static/js/markers/purpleMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var redIcon = L.icon({
  iconUrl: "static/js/markers/redMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});
var yellowIcon = L.icon({
  iconUrl: "static/js/markers/yellowMarker.svg",
  iconSize: [32, 37],
  iconAnchor: [32, 37],
  popupAnchor: [0, -30],
});

var markerLayer = L.layerGroup();

function callKmeansClustering() {
  fetch("/api/kmeansClustering")
    .then((response) => response.json())
    .then((data) => {
      var coords = data.result.coords;
      var labels = data.result.labels;
      var centers = data.result.cluster_centers;
      var names = data.result.names;

      markerLayer.clearLayers();

      for (var i = 0; i < coords.length; i++) {
        var p = [coords[i][1], coords[i][0]];
        var marker;

        if (labels[i] == 0) {
          marker = L.marker(p, { icon: blueIcon });
        } else if (labels[i] == 1) {
          marker = L.marker(p, { icon: greenIcon });
        } else if (labels[i] == 2) {
          marker = L.marker(p, { icon: redIcon });
        } else if (labels[i] == 3) {
          marker = L.marker(p, { icon: purpleIcon });
        } else if (labels[i] == 4) {
          marker = L.marker(p, { icon: orangeIcon });
        } else if (labels[i] == 5) {
          marker = L.marker(p, { icon: yellowIcon });
        } else if (labels[i] == 6) {
          marker = L.marker(p, { icon: pinkIcon });
        } else {
            marker = L.marker(p)
        }
        marker.bindPopup(`${names[i]}`);

        markerLayer.addLayer(marker);
      }

      for (var i = 0; i < centers.length; i++) {
        var p = [centers[i][1], centers[i][0]];
        var centerMarker = L.marker(p, { icon: blackIcon });
        markerLayer.addLayer(centerMarker);
      }
    })
    .catch((error) => {
      console.error("Error calling Python function:", error);
    });
}

function callElbowMethod() {
  fetch("/api/elbowMethod");
}

var btnTask7 = document.getElementById("btnTask7");
btnTask7.addEventListener("click", function () {
  if (mymap.hasLayer(markerLayer)) {
    mymap.removeLayer(markerLayer);
  } else {
    callKmeansClustering();
    mymap.addLayer(markerLayer);
  }
});

var btnElbow = document.getElementById("btnElbow");
btnElbow.addEventListener("click", function () {
  callElbowMethod();
});

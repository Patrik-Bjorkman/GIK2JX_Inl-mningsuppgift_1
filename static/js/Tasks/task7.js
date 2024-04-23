mymap = window.mymap;

var blueIcon = L.icon({
    iconUrl: 'static/js/markers/blueMarker.svg',
    iconSize:     [32, 37],
    iconAnchor:   [32, 37], 
    popupAnchor:  [0, -30] 
});

var greenIcon = L.icon({
    iconUrl: 'static/js/markers/greenMarker.svg',
    iconSize:     [32, 37],
    iconAnchor:   [32, 37], 
    popupAnchor:  [0, -30] 
});
var redIcon = L.icon({
    iconUrl: 'static/js/markers/redMarker.svg',
    iconSize:     [32, 37],
    iconAnchor:   [32, 37], 
    popupAnchor:  [0, -30] 
});
var purpleIcon = L.icon({
    iconUrl: 'static/js/markers/purpleMarker.svg',
    iconSize:     [32, 37],
    iconAnchor:   [32, 37], 
    popupAnchor:  [0, -30] 
});
var blackIcon = L.icon({
    iconUrl: 'static/js/markers/blackMarker.svg',
    iconSize:     [32, 37],
    iconAnchor:   [32, 37], 
    popupAnchor:  [0, -30] 
})


var markerLayer = L.layerGroup()

function callPythonFunction() {
    fetch('/api/call_python_function')
        .then(response => response.json())
        .then(data => {
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
                } else {
                    marker = L.marker(p, { icon: purpleIcon });
                }
                marker.bindPopup(
                    `${names[i]}`
                );

                markerLayer.addLayer(marker); 
            }

            for (var i = 0; i < centers.length; i++) {
                var p = [centers[i][1], centers[i][0]];
                var centerMarker = L.marker(p, { icon: blackIcon });
                markerLayer.addLayer(centerMarker); 
            }
        })
        .catch(error => {
            console.error('Error calling Python function:', error);
        });
}

var btnTask7 = document.getElementById("btnTask7");
btnTask7.addEventListener("click", function () {
    if(mymap.hasLayer(markerLayer)){
        mymap.removeLayer(markerLayer)
    }
    else {
        callPythonFunction();
        mymap.addLayer(markerLayer)
    }
});
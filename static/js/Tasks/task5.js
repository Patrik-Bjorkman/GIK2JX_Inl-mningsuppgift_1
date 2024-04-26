mymap = window.mymap;

var markers = L.markerClusterGroup();

var fuelLayer = L.geoJSON(fuel, {
	onEachFeature: function (feature, layer) {
		layer.bindPopup(feature.properties.name);
		if (feature.geometry && feature.geometry.type === 'Point') {
			var marker = L.marker([
				feature.geometry.coordinates[1],
				feature.geometry.coordinates[0],
			]);
			marker.bindPopup(`<p class="fs-6">${feature.properties.name}</p>`);
			markers.addLayer(marker);
		}
	},
});

btnTask5 = document.getElementById('btnTask5');
btnTask5.addEventListener('click', function () {
	if (mymap.hasLayer(markers)) {
		mymap.removeLayer(markers);
	} else {
		mymap.addLayer(markers);
		mymap.setView([59.33675623626816, 17.98315867550492], 11);
	}
});

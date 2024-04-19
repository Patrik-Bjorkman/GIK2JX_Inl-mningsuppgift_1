// mymap = window.mymap;

// var fuelLayer = L.geoJSON(fuel, {
// 	onEachFeature: function (feature, layer) {
// 		layer.bindPopup(feature.properties.name);
// 	},
// });

// var markers = L.markerClusterGroup();

// L.geoJSON(fuelLayer, {
// 	onEachFeature: function (feature, layer) {
// 		if (feature.geometry && feature.geometry.type === 'Point') {
// 			var marker = L.marker([
// 				feature.geometry.coordinates[1],
// 				feature.geometry.coordinates[0],
// 			]);
// 			marker.bindPopup(feature.properties.name);
// 			markers.addLayer(marker);
// 		}
// 	},
// });

// btnTask5 = document.getElementById('btnTask5');
// btnTask5.addEventListener('click', function () {
// 	mymap.addLayer(markers);
// });

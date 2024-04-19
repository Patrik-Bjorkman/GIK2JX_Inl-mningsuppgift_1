mymap = window.mymap;

var supermarketLayer = L.geoJSON(supermarket, {
	onEachFeature: function (feature, layer) {
		layer.bindPopup(feature.properties.name);
	},
});

function createBufferedZones(geojsonData, radius) {
	var bufferedFeatures = geojsonData.features.map((feature) => {
		return turf.buffer(feature, radius, { units: 'kilometers' });
	});
	return turf.featureCollection(bufferedFeatures);
}

var bufferLayer = L.geoJSON(createBufferedZones(supermarket, 1), {
	style: function () {
		return { color: 'grey', weight: 1, opacity: 0.2 };
	},
});

function checkIsolation(geojsonData, bufferRadius) {
	var buffers = geojsonData.features.map((feature) =>
		turf.buffer(feature, bufferRadius, { units: 'kilometers' })
	);
	var isolatedFeatures = [];

	for (let i = 0; i < buffers.length; i++) {
		let isIsolated = true;
		for (let j = 0; j < buffers.length; j++) {
			if (i !== j && turf.intersect(buffers[i], buffers[j])) {
				isIsolated = false;
				break;
			}
		}
		if (isIsolated) {
			isolatedFeatures.push(geojsonData.features[i]);
		}
	}

	return turf.featureCollection(isolatedFeatures);
}

function highlightIsolatedSupermarkets() {
	var isolatedSupermarkets = checkIsolation(supermarket, 1);
	var isolatedBuffers = createBufferedZones(isolatedSupermarkets, 1);

	L.geoJSON(isolatedBuffers, {
		style: function () {
			return { color: 'red', weight: 2, opacity: 0.8 };
		},
	}).addTo(mymap);
}

btnTask3 = document.getElementById('btnTask3');
btnTask3.addEventListener('click', function () {
	if (mymap.hasLayer(supermarketLayer) || mymap.hasLayer(bufferLayer)) {
		mymap.removeLayer(supermarketLayer);
		mymap.removeLayer(bufferLayer);
	} else {
		mymap.setView([59.99127905073191, 17.820411761712652], 9);
		mymap.addLayer(supermarketLayer);
		mymap.addLayer(bufferLayer);
		highlightIsolatedSupermarkets();
	}
});

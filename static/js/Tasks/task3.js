mymap = window.mymap;

var supermarketLayer = L.geoJson(supermarket);

supermarketLayer = L.geoJSON(supermarket, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
    var buffered = turf.buffer(layer.toGeoJSON(), 1, { units: "kilometers" });
    L.geoJSON(buffered).addTo(mymap);
  },
});

btnTask3 = document.getElementById("btnTask3");

btnTask3.addEventListener("click", function () {
  if (mymap.hasLayer(supermarketLayer)) {
    mymap.removeLayer(supermarketLayer);
  } else {
    supermarketLayer.addTo(mymap);
  }
});

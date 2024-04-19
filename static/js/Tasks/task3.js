mymap = window.mymap;

var supermarketLayer = L.geoJson(supermarket);

supermarketLayer = L.geoJSON(supermarket, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
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

window.mymap = L.map("mymap", {
    center: [60.48868922712431, 15.421371459960938],
    zoom: 15,
  });

lyrOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
mymap.addLayer(lyrOSM);

L.control.polylineMeasure().addTo(mymap);
var sidebar = L.control.sidebar('sidebar', {position: 'left'});
mymap.addControl(sidebar);
window.mymap = L.map('mymap', {
	center: [60.48868922712431, 15.421371459960938],
	zoom: 15,
});

lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
mymap.addLayer(lyrOSM);

var sidebar = L.control.sidebar('sidebar', { position: 'left' });
mymap.addControl(sidebar);

var polylineMeasure = L.control.polylineMeasure({
	position: 'topleft',
	showBearings: true,
	clearMeasurementsOnStop: false,
	showClearControl: true,
	showUnitControl: true,
});
polylineMeasure.addTo(mymap);

L.control
	.scale({
		maxWidth: 400,
		metric: true,
		imperial: false,
	})
	.addTo(mymap);

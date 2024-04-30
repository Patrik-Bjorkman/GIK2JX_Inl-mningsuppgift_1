window.mymap = L.map('mymap', {
	center: [60.48868922712431, 15.421371459960938],
	zoom: 15,
});

lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
mymap.addLayer(lyrOSM);

/* let polylineMeasure = L.control.polylineMeasure().addTo(mymap);
var sidebar = L.control.sidebar('sidebar', { position: 'left' });
mymap.addControl(sidebar); */

// Initialize the PolylineMeasure control
var polylineMeasure = L.control.polylineMeasure({
    position: 'topleft', // Adjust the position as needed
    //unit: 'kilometers', // Set the unit for measurements
    showBearings: true, // Show bearings
    clearMeasurementsOnStop: false, // Don't clear measurements on stop
    showClearControl: true, // Show clear control button
    showUnitControl: true // Show unit control button
});
polylineMeasure.addTo(mymap);

L.control
	.scale({
		maxWidth: 400,
		metric: true,
		imperial: false,
	})
	.addTo(mymap);

mymap = window.mymap;

var imageUrl = '../static/img/rommetravbana.png',
	imageBounds = [
		[60.45026842668581, 15.501139923305422],
		[60.45123392785298, 15.499091965900135],
		[60.44942303343495, 15.493651797109885],
		[60.44808370750972, 15.495573448772113],
	];

var showImage = L.imageOverlay(imageUrl, imageBounds);

btnTask4 = document.getElementById('btnTask4');
btnTask4.addEventListener('click', function () {
	if (mymap.hasLayer(showImage)) {
		mymap.removeLayer(showImage);
	} else {
		showImage.addTo(mymap);
		mymap.setView([60.449031475421464, 15.49492387637925], 16);
	}
});

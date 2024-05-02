mymap = window.mymap;

var polyPointJapPark = [60.735821278176125, 14.980322620034059];
var polyPointTegera = [60.7348828969221, 14.986344134164533];
var polyPointHildaholm = [60.73398607788189, 14.98092127739745];
var polyPointLeksandsKyrka = [60.730998414058625, 14.982579405565346];
var polyPointStation = [60.733842043855304, 15.002288587135828];

var points = [polyPointJapPark, polyPointTegera, polyPointHildaholm, polyPointLeksandsKyrka, polyPointStation];

polyPointJapPark = L.marker(polyPointJapPark).bindPopup(
	'<p class="fs-6">Japanska parken</p>'
);

polyPointJapPark.on('click', function (e) {
	document.getElementById('sidebar').innerHTML = `
      <h5 class="text-center">Japanska parken</h5>
      <div class="d-flex justify-content-center"><img class="rounded-1" src='../static/img/Japanska_parken.png' width='400px'></div>
      <p class="fs-5">Japanska parken har byggts för att manifestera ett långsiktigt arbete mellan Leksandsbygden Leksands vänort staden Tobetsu på Hokkaido i Japan. </p><p class="fs-6">Besöksadress: Klockaregatan, 793 31 Leksand</p>
  `;

	sidebar.show();
});

polyPointTegera = L.marker(polyPointTegera).bindPopup(
	'<p class="fs-6">Tegera arena</p>'
);

polyPointTegera.on('click', function (e) {
	document.getElementById('sidebar').innerHTML = `
  <h5 class="text-center">Tegera Arena</h5><div class="d-flex justify-content-center"><img class="rounded-1" src='../static/img/Tegera.png'width='300px'></div><p class="fs-5 mt-2">Tegera arean, tidigare Ejendals Arena, är en idrotts- och evenemangsarena i Leksand, där ishockeylaget Leksands IF spelar sina hemmamatcher.</p><p class="fs-6">Address: Arenatorget, 793 31 Leksand.</p><p class="fs-6">Kapacitet: 7,650</p>
  `;

	sidebar.show();
});

polyPointHildaholm = L.marker(polyPointHildaholm).bindPopup(
	'<p class="fs-6">Hildaholm</p>'
);

polyPointHildaholm.on('click', function (e) {
	document.getElementById('sidebar').innerHTML = `
  <h5 class="text-center">Hildaholm</h5><div class="d-flex justify-content-center"><img class="rounded-1" src='../static/img/hildaholm.png'width='300px'></div><p class="fs-5">Turistattraktion, byggdes 1910 för den berömde läkaren och författaren Axel Munthe och hans engelska fru Hilda Pennington Mellor. .</p><p class="fs-6">Öppettider: 1 juni - 31 augusti, tisdag - söndag 11.00 - 16.00</p><p class="fs-6">Besöksadress: Klockaregatan 5, 793 31 Leksand</p>
  `;

	sidebar.show();
});

polyPointLeksandsKyrka = L.marker(polyPointLeksandsKyrka).bindPopup(
	'<p class="fs-6">Leksands kyrka</p>'
);

polyPointLeksandsKyrka.on('click', function (e) {
	document.getElementById('sidebar').innerHTML = `
  <h5 class="text-center">Leksands Kyrka</h5><div class="d-flex justify-content-center"><img class="rounded-1" src='../static/img/Leksands_kyrka.png'width='300px'></div><p class="fs-5">Plats för 2300 personer. Kyrkan är även den äldsta av kyrkorna runt sjön.</p><p class="fs-6">Trossamfund: Svenska kyrkan</p><p class="fs-6">Stift: Västerås stift</p><p class="fs-6">Församling: Leksands församling Siljan.</p><p class="fs-6">Kyrkallén 23, 793 31 Leksand.</p>
  `;

	sidebar.show();
});

polyPointStation = L.marker(polyPointStation).bindPopup(
	'<p class="fs-6">Leksands tågstation</p>'
);

polyPointStation.on('click', function (e) {
	document.getElementById('sidebar').innerHTML = `
  <h5 class="text-center">Leksands tågstation</h5><div class="d-flex justify-content-center"><img class="rounded-1" src='../static/img/tagstation.png'width='300px'></div><p class="fs-6">Öppettider</p> <p class="fs-6">Mån-fre 05.30-21.15</p> <p class="fs-6">Lör 06.45-20.15</p> <p class="fs-6">Sön 07.30-21.15</p> <p class="fs-6">Adress: Stationsgatan 14 793 30 Leksand</p>
  `;

	sidebar.show();
});

btnTask2 = document.getElementById('btnTask2');

btnTask2.addEventListener('click', function () {
	if (mymap.hasLayer(polyPointJapPark)) {
		mymap.removeLayer(polyPointJapPark);
		mymap.removeLayer(polyPointTegera);
		mymap.removeLayer(polyPointHildaholm);
		mymap.removeLayer(polyPointLeksandsKyrka);
		mymap.removeLayer(polyPointStation);
		polylineMeasure._clearAllMeasurements()
	} else {
		mymap.setView([60.73059328557813, 15.001003359666047], 13);
		polyPointJapPark.addTo(mymap);
		polyPointTegera.addTo(mymap);
		polyPointHildaholm.addTo(mymap);
		polyPointLeksandsKyrka.addTo(mymap);
		polyPointStation.addTo(mymap);
		polylineMeasure.seed([points])
	}
});

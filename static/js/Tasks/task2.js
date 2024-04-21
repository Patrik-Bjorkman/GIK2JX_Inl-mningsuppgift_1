mymap = window.mymap;



var polyPointJapPark = [60.735821278176125, 14.980322620034059];
var polyPointTegera = [60.7348828969221, 14.986344134164533];
var polyPointHildaholm = [60.73398607788189, 14.98092127739745];
var polyPointLeksandsKyrka = [60.730998414058625, 14.982579405565346];
var polyPointStation = [60.733842043855304, 15.002288587135828];

polyPointJapPark = L.marker(polyPointJapPark).bindPopup('Japanska parken');
//polyPointJapPark.bindPopup(
//"<h5>Japanska parken</h5><img src='../static/img/Japanska_parken.png'width='300px'><p>Japanska parken har byggts för att manifestera ett långsiktigt arbete mellan Leksandsbygden Leksands vänort staden Tobetsu på Hokkaido i Japan. </p><p>Besöksadress: Klockaregatan, 793 31 Leksand</p>"
//);

polyPointJapPark.on('click', function (e) {
  document.getElementById('sidebar').innerHTML = `
      <h5>Japanska parken</h5>
      <img src='../static/img/Japanska_parken.png' width='400px'>
      <p>Japanska parken har byggts för att manifestera ett långsiktigt arbete mellan Leksandsbygden Leksands vänort staden Tobetsu på Hokkaido i Japan. </p><p>Besöksadress: Klockaregatan, 793 31 Leksand</p>
  `;

  sidebar.show();
});

polyPointTegera = L.marker(polyPointTegera).bindPopup('Tegera arena');
//polyPointTegera.bindPopup(
  //"<h5>Tegera Arena</h5><img src='../static/img/Tegera.png'width='300px'><p>Tegera arean, tidigare Ejendals Arena, är en idrotts- och evenemangsarena i Leksand, där ishockeylaget Leksands IF spelar sina hemmamatcher.</p><p>Address: Arenatorget, 793 31 Leksand.</p><p>Kapacitet: 7,650</p>"
//);

polyPointTegera.on('click', function (e) {
  document.getElementById('sidebar').innerHTML = `
  <h5>Tegera Arena</h5><img src='../static/img/Tegera.png'width='300px'><p>Tegera arean, tidigare Ejendals Arena, är en idrotts- och evenemangsarena i Leksand, där ishockeylaget Leksands IF spelar sina hemmamatcher.</p><p>Address: Arenatorget, 793 31 Leksand.</p><p>Kapacitet: 7,650</p>
  `;

  sidebar.show();
});

polyPointHildaholm = L.marker(polyPointHildaholm).bindPopup('Hildaholm');;
//polyPointHildaholm.bindPopup(
 // "<h5>Hildaholm</h5><img src='../static/img/hildaholm.png'width='300px'><p>Turistattraktion, byggdes 1910 för den berömde läkaren och författaren Axel Munthe och hans engelska fru Hilda Pennington Mellor. .</p><p>Öppettider: 1 juni - 31 augusti, tisdag - söndag 11.00 - 16.00</p><p>Besöksadress: Klockaregatan 5, 793 31 Leksand</p>"
//);

polyPointHildaholm.on('click', function (e) {
  document.getElementById('sidebar').innerHTML = `
  <h5>Hildaholm</h5><img src='../static/img/hildaholm.png'width='300px'><p>Turistattraktion, byggdes 1910 för den berömde läkaren och författaren Axel Munthe och hans engelska fru Hilda Pennington Mellor. .</p><p>Öppettider: 1 juni - 31 augusti, tisdag - söndag 11.00 - 16.00</p><p>Besöksadress: Klockaregatan 5, 793 31 Leksand</p>
  `;

  sidebar.show();
});

polyPointLeksandsKyrka = L.marker(polyPointLeksandsKyrka).bindPopup('Leksands kyrka');;
//polyPointLeksandsKyrka.bindPopup(
  //"<h5>Leksands Kyrka</h5><img src='../static/img/Leksands_kyrka.png'width='300px'><p>Plats för 2300 personer. Kyrkan är även den äldsta av kyrkorna runt sjön.</p><p>Trossamfund: Svenska kyrkan</p><p>Stift: Västerås stift</p><p>Församling: Leksands församling Siljan.</p><p>Kyrkallén 23, 793 31 Leksand.</p>"
//);

polyPointLeksandsKyrka.on('click', function (e) {
  document.getElementById('sidebar').innerHTML = `
  <h5>Leksands Kyrka</h5><img src='../static/img/Leksands_kyrka.png'width='300px'><p>Plats för 2300 personer. Kyrkan är även den äldsta av kyrkorna runt sjön.</p><p>Trossamfund: Svenska kyrkan</p><p>Stift: Västerås stift</p><p>Församling: Leksands församling Siljan.</p><p>Kyrkallén 23, 793 31 Leksand.</p>
  `;

  sidebar.show();
});

polyPointStation = L.marker(polyPointStation).bindPopup('Tågstationen');;
//polyPointStation.bindPopup(
 // "<h5>Leksands tågstation</h5><img src='../static/img/tagstation.png'width='300px'><p>Öppettider</p> <p>Mån-fre 05.30-21.15</p> <p>Lör 06.45-20.15</p> <p>Sön 07.30-21.15.</p> <p>Adress: Stationsgatan 14 793 30 Leksand</p>"
//);

polyPointStation.on('click', function (e) {
  document.getElementById('sidebar').innerHTML = `
  <h5>Leksands tågstation</h5><img src='../static/img/tagstation.png'width='300px'><p>Öppettider</p> <p>Mån-fre 05.30-21.15</p> <p>Lör 06.45-20.15</p> <p>Sön 07.30-21.15.</p> <p>Adress: Stationsgatan 14 793 30 Leksand</p>
  `;

  sidebar.show();
});

btnTask2 = document.getElementById("btnTask2");

btnTask2.addEventListener("click", function () {
  if (mymap.hasLayer(polyPointJapPark)) {
    mymap.removeLayer(polyPointJapPark);
    mymap.removeLayer(polyPointTegera);
    mymap.removeLayer(polyPointHildaholm);
    mymap.removeLayer(polyPointLeksandsKyrka);
    mymap.removeLayer(polyPointStation);
  } else {
    mymap.setView([60.73059328557813, 15.001003359666047], 13);
    polyPointJapPark.addTo(mymap);
    polyPointTegera.addTo(mymap);
    polyPointHildaholm.addTo(mymap);
    polyPointLeksandsKyrka.addTo(mymap);
    polyPointStation.addTo(mymap);
  }
});

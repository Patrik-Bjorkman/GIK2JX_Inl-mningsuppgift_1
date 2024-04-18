mymap = window.mymap;

var polyPointA = [60.73059328557813, 15.001003359666047];
var polyPointB = [60.83059328557813, 15.001003359666047];
var polyPointC = [60.93059328557813, 15.001003359666047];
var polyPointD = [60.03059328557813, 15.001003359666047];
var polyPointE = [60.13059328557813, 15.001003359666047];

polyPointA = L.marker(polyPointA);
polyPointA.bindPopup(
  "<h5>asd</h5><img src='../static/img/kupolen.png'width='300px'><p>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

polyPointB = L.marker(polyPointB);
polyPointB.bindPopup(
  "<h5>Kgsdf</h5><img src='../static/img/kupolen.png'width='300px'><p>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

polyPointC = L.marker(polyPointC);
polyPointC.bindPopup(
  "<h5>Kutyrtyn</h5><img src='../static/img/kupolen.png'width='300px'><p>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

polyPointD = L.marker(polyPointD);
polyPointD.bindPopup(
  "<h5>Kugfhdfen</h5><img src='../static/img/kupolen.png'width='300px'><p>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

polyPointE = L.marker(polyPointE);
polyPointE.bindPopup(
  "<h5>Kupdfghn</h5><img src='../static/img/kupolen.png'width='300px'><p>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

btnTask2 = document.getElementById("btnTask2");

btnTask2.addEventListener("click", function () {
  mymap.setView([60.73059328557813, 15.001003359666047], 13);
  if (mymap.hasLayer(polyPointA)) {
    mymap.removeLayer(polyPointA);
    mymap.removeLayer(polyPointB);
    mymap.removeLayer(polyPointC);
    mymap.removeLayer(polyPointD);
    mymap.removeLayer(polyPointE);
  } else {
    polyPointA.addTo(mymap);
    polyPointB.addTo(mymap);
    polyPointC.addTo(mymap);
    polyPointD.addTo(mymap);
    polyPointE.addTo(mymap);
  }
});

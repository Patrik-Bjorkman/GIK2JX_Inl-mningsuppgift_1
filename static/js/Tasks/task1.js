var mymap;

var polyPointKupolen = [60.484235085475206, 15.417972001328266];

var polyLineA = [60.486339219045306, 15.411463508264603];

var polyLineB = [60.48658631269464, 15.410772805971419];

var polyLineC = [60.48664302244697, 15.410197220727753];

var polyLineD = [60.48704808922233, 15.40900493700974];

var polyLineE = [60.487177709521944, 15.408881597315087];

var polyLineF = [60.488311865047166, 15.405395195267545];

var polyLineG = [60.48821465327049, 15.404992285598127];

var polyLineH = [60.48748555565746, 15.404063126562136];

var polyLineI = [60.4873275823478, 15.40399734539099];

var polyLineJ = [60.4871453044957, 15.404400255061688];

var polyLineList = [
	polyLineA,
	polyLineB,
	polyLineC,
	polyLineD,
	polyLineE,
	polyLineF,
	polyLineG,
	polyLineH,
	polyLineI,
	polyLineJ,
];

var polygonA = [60.48568639897627, 15.410386745652886];
var polygonB = [60.48503883764809, 15.408894290456146];
var polygonC = [60.48490167890216, 15.408812136959853];
var polygonD = [60.48451943015587, 15.409743209925779];
var polygonE = [60.48442948861987, 15.410578437145887];
var polygonF = [60.48449244772138, 15.411326946785152];
var polygonG = [60.48460037732531, 15.41176053468638];
var polygonH = [60.484888187846536, 15.412436018995919];
var polygonI = [60.48568639897627, 15.410386745652886];

var polygonPoint = [60.48502084964875, 15.410541924480299];

mymap = window.mymap;

polyPointKupolen = L.marker(polyPointKupolen);
polyPointKupolen.bindPopup(
	"<h5 class='text-center'>Kupolen</h5><img class='rounded' src='../static/img/kupolen.png'width='300px'><p class='fs-6'>Borlänge största köpcentrum, Kupolen! Hit reser folk land och rike runt för att shoppa loss.</p>"
);

var polyLine = L.polyline(polyLineList, {
	color: 'red',
	weight: 3,
	opacity: 0.8,
	smoothFactor: 1,
});

var markerA = L.marker(polyLineE);
markerA.bindPopup(
	"<h5 class='text-center'>Röda vägen</h5><img class='rounded' src='../static/img/roda_vagen.png'width='300px'><p class='fs-6'>Röda vägen i Borlänge vid Högskolan Dalarna och Trafikverket, vägen ligger i området Dalarna Science Park</p>"
);

var polygon = L.polygon(
	[
		polygonA,
		polygonB,
		polygonC,
		polygonD,
		polygonE,
		polygonF,
		polygonG,
		polygonH,
		polygonI,
	],
	{
		color: 'blue',
		weight: 3,
		opacity: 0.8,
		fillColor: 'blue',
		fillOpacity: 0.2,
	}
);

var polymarker = L.marker(polygonPoint);
polymarker.bindPopup(
	"<h5 class='text-center'>Börje Anderssons Park</h5><img class='rounded' src='../static/img/borje_anderssons_park.png'width='300px'><p class='fs-6'>I Börje Anderssons park hittar du fina grönytor, här kan ni samlas för att njuta av solen eller varje inte grilla tillsammans en fin sommarkväll. När man vill ägna sig åt lite lungare aktiviterer så kan man spela lite boule på den fina bouleplanen.</p>"
);

btnTask1 = document.getElementById('btnTask1');

btnTask1.addEventListener('click', function () {
	if (mymap.hasLayer(polyLine)) {
		mymap.removeLayer(polyLine);
		mymap.removeLayer(polyPointKupolen);
		mymap.removeLayer(markerA);
		mymap.removeLayer(polygon);
		mymap.removeLayer(polymarker);
	} else {
		mymap.setView([60.48502084964875, 15.410541924480299], 15);
		polyLine.addTo(mymap);
		polyPointKupolen.addTo(mymap);
		markerA.addTo(mymap);
		polygon.addTo(mymap);
		polymarker.addTo(mymap);
	}
});

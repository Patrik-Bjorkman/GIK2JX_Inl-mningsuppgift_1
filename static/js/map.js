var mymap;
var lyrOSM;

var pointA = [60.486339219045306, 15.411463508264603];

var pointB = [60.48658631269464, 15.410772805971419];

var pointC = [60.48664302244697, 15.410197220727753];

var pointD = [60.48704808922233, 15.40900493700974];

var pointE = [60.487177709521944, 15.408881597315087];

var pointF = [60.488311865047166, 15.405395195267545];

var pointG = [60.48821465327049, 15.404992285598127];

var pointH = [60.48748555565746, 15.404063126562136];

var pointI = [60.4873275823478, 15.40399734539099];

var pointJ = [60.4871453044957, 15.404400255061688];

var pointList = [
	pointA,
	pointB,
	pointC,
	pointD,
	pointE,
	pointF,
	pointG,
	pointH,
	pointI,
	pointJ,
];

$(document).ready(function () {
	mymap = L.map('mymap', {
		center: [60.48868922712431, 15.421371459960938],
		zoom: 13,
	});
	lyrOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	mymap.addLayer(lyrOSM);

	var polyLine = L.polyline(pointList, {
		color: 'red',
		weight: 3,
		opacity: 0.8,
		smoothFactor: 1,
	});
	polyLine.addTo(mymap);
});

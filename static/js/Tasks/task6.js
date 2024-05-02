mymap = window.mymap;

function getTime(forecast, n) {
	var currentDate = new Date();

	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth() + 1;
	var currentDay = currentDate.getDate();
	var currentHour = currentDate.getHours();
	var currentMinute = currentDate.getMinutes();

	if (currentMonth <= 9) {
		currentMonth = '0' + currentMonth;
	}
	if (currentDay <= 9) {
		currentDay = '0' + currentDay;
	}
	if (currentMinute < 15) {
		currentMinute = '00';
	} else if (currentMinute < 30) {
		currentMinute = '15';
	} else if (currentMinute < 45) {
		currentMinute = '30';
	} else {
		currentMinute = '45';
	}

	if (forecast) {
		var forecastTimes = [];
		for (i = 1; i <= n; i++) {
			if (currentHour >= 23) {
				break;
			}
			currentHour++;
			if (currentHour <= 9) {
				currentHour = '0' + currentHour;
			}
			var forecastTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}`;
			forecastTimes.push(forecastTime);
		}
		return forecastTimes;
	}
	if (currentHour <= 9) {
		currentHour = '0' + currentHour;
	}

	var currentTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}`;
	console.log(currentTime)

	return currentTime;
}

var weatherApiUrlBorlänge =
	'https://api.open-meteo.com/v1/forecast?latitude=60.4858&longitude=15.4371&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET';
var weatherApiUrlNY =
	'https://api.open-meteo.com/v1/forecast?latitude=40.7239&longitude=-73.9989&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET';
var weatherApiUrlKyoto =
	'https://api.open-meteo.com/v1/forecast?latitude=35.0168&longitude=135.7600&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET';
var weatherApiUrlLondon =
	'https://api.open-meteo.com/v1/forecast?latitude=51.5071&longitude=-0.1256&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET';
var weatherApiUrlRome =
	'https://api.open-meteo.com/v1/forecast?latitude=41.8972&longitude=12.4865&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET';

var pointBorlänge = [60.4858, 15.437];
var pointNY = [40.7239, -73.9989];
var pointKyoto = [35.0168, 135.76];
var pointLondon = [51.5071, -0.1256];
var pointRome = [41.8972, 12.4865];

var markerBorlänge = L.marker(pointBorlänge);
var markerNY = L.marker(pointNY);
var markerKyoto = L.marker(pointKyoto);
var markerLondon = L.marker(pointLondon);
var markerRome = L.marker(pointRome);

markerBorlänge.on('click', function () {
	fetch(weatherApiUrlBorlänge)
		.then((response) => response.json())
		.then((data) => {
			var currentTime = getTime();
			var currentIndex = data.minutely_15.time.indexOf(currentTime);
			var forecastTimes = getTime(true, 5);
			var forecastIndex = [];
			var forecastTemp = [];

			for (i = 0; i < forecastTimes.length; i++) {
				forecastIndex.push(data.minutely_15.time.indexOf(forecastTimes[i]));
			}

			for (i = 0; i < forecastIndex.length; i++) {
				forecastTemp.push(data.minutely_15.temperature_2m[forecastIndex[i]]);
			}
			var forecastList = '';
			for (var i = 0; i < forecastTemp.length; i++) {
				if (forecastTemp[i] >= 18) {
					forecastList += `<p style="color: red;">${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				} else {
					forecastList += `<p>${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				}
			}

			var content = `
                <h5 class="text-center">Weather Borlänge</h5>
                <div class="fs-6">
                  <p><strong>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</strong></p>
                  <p>Precipitation(snow/rain): ${data.hourly.precipitation[currentIndex]}mm</p>
                  <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
                  <p>Current time: ${data.minutely_15.time[currentIndex]}</p>
                  <div class="border border-2 rounded p-2"><p><strong>Forecast 5h:</strong></p>${forecastList}</div>
                </div>`;

			document.getElementById('sidebar').innerHTML = content;
			sidebar.show();
			markerBorlänge.setPopupContent(content);
			markerBorlänge.openPopup();
		})
		.catch((error) => {
			console.error('Error fetching weather data:', error);
			var errorContent = '<p>Error fetching weather data.</p>';
			document.getElementById('sidebar').innerHTML = errorContent;
			sidebar.show();
			markerBorlänge.setPopupContent(errorContent);
			markerBorlänge.openPopup();
		});
});

markerNY.on('click', function () {
	fetch(weatherApiUrlNY)
		.then((response) => response.json())
		.then((data) => {
			var currentTime = getTime();
			var currentIndex = data.minutely_15.time.indexOf(currentTime);
			var forecastTimes = getTime(true, 5);
			var forecastIndex = [];
			var forecastTemp = [];

			for (i = 0; i < forecastTimes.length; i++) {
				forecastIndex.push(data.minutely_15.time.indexOf(forecastTimes[i]));
			}

			for (i = 0; i < forecastIndex.length; i++) {
				forecastTemp.push(data.minutely_15.temperature_2m[forecastIndex[i]]);
			}
			var forecastList = '';
			for (var i = 0; i < forecastTemp.length; i++) {
				if (forecastTemp[i] >= 18) {
					forecastList += `<p style="color: red;">${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				} else {
					forecastList += `<p>${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				}
			}

			var content = `
				  <h5 class="text-center">Weather New York</h5>
				  <div class="fs-6">
            <p><strong>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</strong></p>
            <p>Precipitation(snow/rain): ${data.hourly.precipitation[currentIndex]}mm</p>
            <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            <p>Current time: ${data.minutely_15.time[currentIndex]}</p>
            <div class="border border-2 rounded p-2"><p><strong>Forecast 5h:</strong></p>${forecastList}</div>
          </div>
			  `;

			document.getElementById('sidebar').innerHTML = content;
			sidebar.show();
			markerNY.setPopupContent(content);
			markerNY.openPopup();
		})
		.catch((error) => {
			console.error('Error fetching weather data:', error);
			var errorContent = '<p>Error fetching weather data.</p>';
			document.getElementById('sidebar').innerHTML = errorContent;
			sidebar.show();
			markerNY.setPopupContent(errorContent);
			markerNY.openPopup();
		});
});

markerKyoto.on('click', function () {
	fetch(weatherApiUrlKyoto)
		.then((response) => response.json())
		.then((data) => {
			var currentTime = getTime();
			var currentIndex = data.minutely_15.time.indexOf(currentTime);
			var forecastTimes = getTime(true, 5);
			var forecastIndex = [];
			var forecastTemp = [];

			for (i = 0; i < forecastTimes.length; i++) {
				forecastIndex.push(data.minutely_15.time.indexOf(forecastTimes[i]));
			}

			for (i = 0; i < forecastIndex.length; i++) {
				forecastTemp.push(data.minutely_15.temperature_2m[forecastIndex[i]]);
			}
			var forecastList = '';
			for (var i = 0; i < forecastTemp.length; i++) {
				if (forecastTemp[i] >= 18) {
					forecastList += `<p style="color: red;">${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				} else {
					forecastList += `<p>${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				}
			}

			var content = `
				  <h5 class="text-center">Weather Kyoto</h5>
				  <div class="fs-6">
            <p><strong>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</strong></p>
            <p>Precipitation(snow/rain): ${data.hourly.precipitation[currentIndex]}mm</p>
            <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            <p>Current time: ${data.minutely_15.time[currentIndex]}</p>
            <div class="border border-2 rounded p-2"><p><strong>Forecast 5h:</strong></p>${forecastList}</div>
          </div>
			  `;

			document.getElementById('sidebar').innerHTML = content;
			sidebar.show();
			markerKyoto.setPopupContent(content);
			markerKyoto.openPopup();
		})
		.catch((error) => {
			console.error('Error fetching weather data:', error);
			var errorContent = '<p>Error fetching weather data.</p>';
			document.getElementById('sidebar').innerHTML = errorContent;
			sidebar.show();
			markerKyoto.setPopupContent(errorContent);
			markerKyoto.openPopup();
		});
});

markerLondon.on('click', function () {
	fetch(weatherApiUrlLondon)
		.then((response) => response.json())
		.then((data) => {
			var currentTime = getTime();
			var currentIndex = data.minutely_15.time.indexOf(currentTime);
			var forecastTimes = getTime(true, 5);
			var forecastIndex = [];
			var forecastTemp = [];

			for (i = 0; i < forecastTimes.length; i++) {
				forecastIndex.push(data.minutely_15.time.indexOf(forecastTimes[i]));
			}

			for (i = 0; i < forecastIndex.length; i++) {
				forecastTemp.push(data.minutely_15.temperature_2m[forecastIndex[i]]);
			}
			var forecastList = '';
			for (var i = 0; i < forecastTemp.length; i++) {
				if (forecastTemp[i] >= 18) {
					forecastList += `<p style="color: red;">${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				} else {
					forecastList += `<p>${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				}
			}

			var content = `
				  <h5 class="text-center">Weather London</h5>
				  <div class="fs-6">
            <p><strong>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</strong></p>
            <p>Precipitation(snow/rain): ${data.hourly.precipitation[currentIndex]}mm</p>
            <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            <p>Current time: ${data.minutely_15.time[currentIndex]}</p>
            <div class="border border-2 rounded p-2"><p><strong>Forecast 5h:</strong></p>${forecastList}</div>
          </div>
			  `;

			document.getElementById('sidebar').innerHTML = content;
			sidebar.show();
			markerLondon.setPopupContent(content);
			markerLondon.openPopup();
		})
		.catch((error) => {
			console.error('Error fetching weather data:', error);
			var errorContent = '<p>Error fetching weather data.</p>';
			document.getElementById('sidebar').innerHTML = errorContent;
			sidebar.show();
			markerLondon.setPopupContent(errorContent);
			markerLondon.openPopup();
		});
});

markerRome.on('click', function () {
	fetch(weatherApiUrlRome)
		.then((response) => response.json())
		.then((data) => {
			var currentTime = getTime();
			var currentIndex = data.minutely_15.time.indexOf(currentTime);
			var forecastTimes = getTime(true, 5);
			var forecastIndex = [];
			var forecastTemp = [];

			for (i = 0; i < forecastTimes.length; i++) {
				forecastIndex.push(data.minutely_15.time.indexOf(forecastTimes[i]));
			}

			for (i = 0; i < forecastIndex.length; i++) {
				forecastTemp.push(data.minutely_15.temperature_2m[forecastIndex[i]]);
			}
			var forecastList = '';
			for (var i = 0; i < forecastTemp.length; i++) {
				if (forecastTemp[i] >= 18) {
					forecastList += `<p style="color: red;">${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				} else {
					forecastList += `<p>${forecastTimes[i]}: ${forecastTemp[i]}°C</p>`;
				}
			}

			var content = `
				  <h5 class="text-center">Weather Rome</h5>
				  <div class="fs-6">
            <p><strong>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</strong></p>
            <p>Precipitation(snow/rain): ${data.hourly.precipitation[currentIndex]}mm</p>
            <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            <p>Current time: ${data.minutely_15.time[currentIndex]}</p>
            <div class="border border-2 rounded p-2"><p><strong>Forecast 5h:</strong></p>${forecastList}</div>
          </div>
			  `;

			document.getElementById('sidebar').innerHTML = content;
			sidebar.show();
			markerRome.setPopupContent(content);
			markerRome.openPopup();
		})
		.catch((error) => {
			console.error('Error fetching weather data:', error);
			var errorContent = '<p>Error fetching weather data.</p>';
			document.getElementById('sidebar').innerHTML = errorContent;
			sidebar.show();
			markerRome.setPopupContent(errorContent);
			markerRome.openPopup();
		});
});

var btnTask6 = document.getElementById('btnTask6');
btnTask6.addEventListener('click', function () {
	if (mymap.hasLayer(markerBorlänge)) {
		mymap.removeLayer(markerBorlänge);
		mymap.removeLayer(markerNY);
		mymap.removeLayer(markerKyoto);
		mymap.removeLayer(markerLondon);
		mymap.removeLayer(markerRome);
	} else {
		mymap.setView([42.51242993147848, 31.860527007681863], 3);
		mymap.addLayer(markerBorlänge);
		mymap.addLayer(markerNY);
		mymap.addLayer(markerKyoto);
		mymap.addLayer(markerLondon);
		mymap.addLayer(markerRome);
	}
});

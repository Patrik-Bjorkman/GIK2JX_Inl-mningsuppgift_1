mymap = window.mymap;
// Define the URL as a string and store it in a variable
var weatherApiUrlBorlänge =
	'https://api.open-meteo.com/v1/forecast?latitude=60.4858&longitude=15.4371&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=auto';

var pointBorlänge = [60.4858, 15.437];

// Initialize the marker without binding a popup yet
var markerBorlänge = L.marker(pointBorlänge);

// Event listener for marker click
markerBorlänge.on('click', function () {
	fetch(weatherApiUrlBorlänge)
		.then((response) => response.json())
		.then((data) => {
			var content = `
                <h5>Väder Borlänge</h5>
                <p>Temperature: ${data.hourly.temperature_2m[0]}°C</p>
                <p>Precipitation: ${data.hourly.precipitation[0]}mm</p>
                <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[0]} seconds</p>
            `;
			// Update sidebar and popup content
			document.getElementById('sidebar').innerHTML = content;
			sidebar.show(); // Ensure sidebar is visible
			markerBorlänge.setPopupContent(content); // Update popup content dynamically
			markerBorlänge.openPopup(); // Automatically open the updated popup
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

// Button to toggle the marker on the map
var btnTask6 = document.getElementById('btnTask6');
btnTask6.addEventListener('click', function () {
	if (mymap.hasLayer(markerBorlänge)) {
		mymap.removeLayer(markerBorlänge);
	} else {
		mymap.addLayer(markerBorlänge);
		markerBorlänge.addTo(mymap);
	}
});

mymap = window.mymap;

function getTime() {
  // Get the current date and time
  var currentDate = new Date();

  // Extract individual components of the date and time
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1; // Months are zero-based (0-11), so we add 1

  if (currentMonth <= 9) {
    currentMonth = "0" + currentMonth;
  }

  var currentDay = currentDate.getDate();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();

  if (currentMinute < 15) {
    currentMinute = "00";
  } else if (currentMinute < 30) {
    currentMinute = "15";
  } else if (currentMinute < 45) {
    currentMinute = "30";
  } else {
    currentMinute = "45";
  }

  // Format the date and time as a string
  var currentTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}`;

  console.log(currentTime); // Output the current time

  return currentTime;
}

// Define the URL as a string and store it in a variable

var weatherApiUrlBorlänge =
  "https://api.open-meteo.com/v1/forecast?latitude=60.4858&longitude=15.4371&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET";
var weatherApiUrlNY =
  "https://api.open-meteo.com/v1/forecast?latitude=40.7239&longitude=-73.9989&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET";
var weatherApiUrlKyoto = "https://api.open-meteo.com/v1/forecast?latitude=35.0168&longitude=135.7600&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET"
var weatherApiUrlLondon = "https://api.open-meteo.com/v1/forecast?latitude=51.5071&longitude=-0.1256&minutely_15=temperature_2m,precipitation,sunshine_duration&hourly=temperature_2m,precipitation&timezone=CET"

var pointBorlänge = [60.4858, 15.437];
var pointNY = [40.7239, -73.9989];
var pointKyoto = [35.0168, 135.7600]
var pointLondon = [51.5071, -0.1256]

// Initialize the marker without binding a popup yet
var markerBorlänge = L.marker(pointBorlänge);
var markerNY = L.marker(pointNY);
var markerKyoto = L.marker(pointKyoto)
var markerLondon = L.marker(pointLondon)

// Event listener for marker click
markerBorlänge.on("click", function () {
  fetch(weatherApiUrlBorlänge)
    .then((response) => response.json())
    .then((data) => {
      var currentTime = getTime();
      var currentIndex = data.minutely_15.time.indexOf(currentTime);
      var content = `
                <h5>Väder Borlänge</h5>
                <p>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</p>
				<p>Time: ${data.minutely_15.time[currentIndex]}</p>
                <p>Precipitation: ${data.hourly.precipitation[currentIndex]}mm</p>
                <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            `;
      // Update sidebar and popup content
      document.getElementById("sidebar").innerHTML = content;
      sidebar.show(); // Ensure sidebar is visible
      markerBorlänge.setPopupContent(content); // Update popup content dynamically
      markerBorlänge.openPopup(); // Automatically open the updated popup
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      var errorContent = "<p>Error fetching weather data.</p>";
      document.getElementById("sidebar").innerHTML = errorContent;
      sidebar.show();
      markerBorlänge.setPopupContent(errorContent);
      markerBorlänge.openPopup();
    });
});

markerNY.on("click", function () {
  fetch(weatherApiUrlNY)
    .then((response) => response.json())
    .then((data) => {
      var currentTime = getTime();
      var currentIndex = data.minutely_15.time.indexOf(currentTime);
      var content = `
                <h5>Väder New York</h5>
                <p>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</p>
				<p>Time: ${data.minutely_15.time[currentIndex]}</p>
                <p>Precipitation: ${data.hourly.precipitation[currentIndex]}mm</p>
                <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
            `;
      // Update sidebar and popup content
      document.getElementById("sidebar").innerHTML = content;
      sidebar.show(); // Ensure sidebar is visible
      markerNY.setPopupContent(content); // Update popup content dynamically
      markerNY.openPopup(); // Automatically open the updated popup
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      var errorContent = "<p>Error fetching weather data.</p>";
      document.getElementById("sidebar").innerHTML = errorContent;
      sidebar.show();
      markerNY.setPopupContent(errorContent);
      markerNY.openPopup();
    });
});

markerKyoto.on("click", function () {
	fetch(weatherApiUrlKyoto)
	  .then((response) => response.json())
	  .then((data) => {
		var currentTime = getTime();
		var currentIndex = data.minutely_15.time.indexOf(currentTime);
		var content = `
				  <h5>Väder Kyoto</h5>
				  <p>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</p>
				  <p>Time: ${data.minutely_15.time[currentIndex]}</p>
				  <p>Precipitation: ${data.hourly.precipitation[currentIndex]}mm</p>
				  <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
			  `;
		// Update sidebar and popup content
		document.getElementById("sidebar").innerHTML = content;
		sidebar.show(); // Ensure sidebar is visible
		markerKyoto.setPopupContent(content); // Update popup content dynamically
		markerKyoto.openPopup(); // Automatically open the updated popup
	  })
	  .catch((error) => {
		console.error("Error fetching weather data:", error);
		var errorContent = "<p>Error fetching weather data.</p>";
		document.getElementById("sidebar").innerHTML = errorContent;
		sidebar.show();
		markerKyoto.setPopupContent(errorContent);
		markerKyoto.openPopup();
	  });
  });

  markerLondon.on("click", function () {
	fetch(weatherApiUrlLondon)
	  .then((response) => response.json())
	  .then((data) => {
		var currentTime = getTime();
		var currentIndex = data.minutely_15.time.indexOf(currentTime);
		var content = `
				  <h5>Väder London</h5>
				  <p>Temperature: ${data.minutely_15.temperature_2m[currentIndex]}°C</p>
				  <p>Time: ${data.minutely_15.time[currentIndex]}</p>
				  <p>Precipitation: ${data.hourly.precipitation[currentIndex]}mm</p>
				  <p>Sunshine Duration: ${data.minutely_15.sunshine_duration[currentIndex]} seconds</p>
			  `;
		// Update sidebar and popup content
		document.getElementById("sidebar").innerHTML = content;
		sidebar.show(); // Ensure sidebar is visible
		markerLondon.setPopupContent(content); // Update popup content dynamically
		markerLondon.openPopup(); // Automatically open the updated popup
	  })
	  .catch((error) => {
		console.error("Error fetching weather data:", error);
		var errorContent = "<p>Error fetching weather data.</p>";
		document.getElementById("sidebar").innerHTML = errorContent;
		sidebar.show();
		markerLondon.setPopupContent(errorContent);
		markerLondon.openPopup();
	  });
  });

// Button to toggle the marker on the map
var btnTask6 = document.getElementById("btnTask6");
btnTask6.addEventListener("click", function () {
  if (mymap.hasLayer(markerBorlänge)) {
    mymap.removeLayer(markerBorlänge);
    mymap.removeLayer(markerNY);
	mymap.removeLayer(markerKyoto)
	mymap.removeLayer(markerLondon)
  } else {
    mymap.addLayer(markerBorlänge);
    mymap.addLayer(markerNY);
	mymap.addLayer(markerKyoto)
	mymap.addLayer(markerLondon)
  }
});

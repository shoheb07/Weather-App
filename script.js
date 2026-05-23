const apiKey = "YOUR_API_KEY";

async function getWeather(){

    const city =
        document.getElementById("city").value;

    if(city === ""){

        alert("Please enter city name");

        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("city-name")
            .innerText = data.name;

        document.getElementById("temperature")
            .innerText =
            `Temperature: ${data.main.temp}°C`;

        document.getElementById("description")
            .innerText =
            `Weather: ${data.weather[0].description}`;

        document.getElementById("humidity")
            .innerText =
            `Humidity: ${data.main.humidity}%`;

    } catch(error){

        alert("Error fetching weather data");
    }
}

const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const forecastContainer =
    document.querySelector('#forecast-container');

const myKey =
    "SUA_API_KEY";

const myLat = "-25.405477";
const myLong = "-49.203318";

const currentWeatherURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;


// CURRENT WEATHER
async function apiFetch() {

    try {

        const response =
            await fetch(currentWeatherURL);

        if (response.ok) {

            const data =
                await response.json();

            displayResults(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}


// DISPLAY CURRENT WEATHER
function displayResults(data) {

    myTown.textContent =
        data.name;

    myDescription.textContent =
        data.weather[0].description;

    myTemperature.innerHTML =
        `${Math.round(data.main.temp)}&deg;C`;

    const iconsrc =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    myGraphic.src = iconsrc;

    myGraphic.alt =
        data.weather[0].description;
}


// FORECAST
async function apiForecast() {

    try {

        const response =
            await fetch(forecastURL);

        if (response.ok) {

            const data =
                await response.json();

            displayForecast(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}


// DISPLAY FORECAST
function displayForecast(data) {

    forecastContainer.innerHTML = "";

    const dailyForecasts =
        data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

    dailyForecasts
        .slice(0, 3)
        .forEach(day => {

            const date =
                new Date(day.dt_txt);

            const dayName =
                date.toLocaleDateString(
                    "en-US",
                    {
                        weekday: "short"
                    }
                );

            const temp =
                Math.round(day.main.temp);

            const forecastCard =
                document.createElement("div");

            forecastCard.classList.add(
                "forecast-card"
            );

            forecastCard.innerHTML = `
                <p>
                    <strong>${dayName}</strong>
                </p>

                <p>${temp}°C</p>
            `;

            forecastContainer.appendChild(
                forecastCard
            );

        });
}


apiFetch();
apiForecast();
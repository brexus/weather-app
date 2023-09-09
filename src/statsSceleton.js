const removeStatsSceleton = () => {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `<h3></h3>`;
};

const refreshStatsSceleton = () => {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = 
    `<div id="city-name-weather">
        <h1 id="city-country-title">-</h1>
        <h2 id="localtime">-</h2>
    </div>

    <div id="weather-stats-container">
        <div id="temp-container">
            <div id="temp-icon-container">
                <img src="" alt="" id="condition-icon">
                <h1 id="temp">-°C</h1>
            </div>

            <h2 id="feels-like-temp">Feels like - °C</h2>
        </div>
        
        <div id="weather-stats">
            <div>
                <h1>Wind</h1>
                <h2 id="wind">-</h2>
            </div>

            <div>
                <h1>Pressure</h1>
                <h2 id="pressure">-</h2>
            </div>

            <div>
                <h1>Precip</h1>
                <h2 id="precip">-</h2>
            </div>

            <div>
                <h1>Cloud</h1>
                <h2 id="cloud">-</h2>
            </div>

            <div>
                <h1>Humidity</h1>
                <h2 id="humidity">-</h2>
            </div>

            <div>
                <h1>UV index</h1>
                <h2 id="uv">-</h2>
            </div>
        </div>
    </div>`;
}

export { removeStatsSceleton, refreshStatsSceleton };
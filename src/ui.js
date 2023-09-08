import { getTempF, getFeelsLikeTempF, getCityJson, getTempC, getFeelsLikeTempC, getWindKmh, getPressureMb, getPrecipMm, getName, getCountry, getLocalTime, getConditionIcon, getCloud, getHumidity, getUV } from "./Weather";

const inputTextSearch = document.getElementById("input-text-search");
const inputSearchBtn = document.getElementById("input-search-btn");
const searchContainer = document.getElementById("search-container");

let temperature_mode = "C";

const searchBtnListener = () => {
    inputSearchBtn.addEventListener("click", () => {
        const inputContent = inputTextSearch.value;
    
        if(inputContent !== "") {
            renderWeather(inputContent);
        }
    });

};

const searchFocusListener = () => {
    inputTextSearch.addEventListener("focus", () => {
        searchContainer.classList.remove("no-outline");
        searchContainer.classList.add("white-outline");
    });

    inputTextSearch.addEventListener("blur", () => {
        searchContainer.classList.remove("white-outline");
        searchContainer.classList.add("no-outline");
    });
};

const tempCButtonListener = () => {
    const tempCBtn = document.getElementById("temp-c-btn");

    tempCBtn.addEventListener("click", turn_on_highlights_temp_C);
};

// podświetla przycisk zmiany na temperature Celsjusza
const turn_on_highlights_temp_C = () => {
    const tempCBtn = document.getElementById("temp-c-btn");
    const tempFBtn = document.getElementById("temp-f-btn");

    tempCBtn.classList.add("white-outline");
    tempFBtn.classList.remove("white-outline");
    

};

// podświetla przycisk zmiany na temperature Farenheita
const turn_on_highlights_temp_F = () => {
    const tempCBtn = document.getElementById("temp-c-btn");
    const tempFBtn = document.getElementById("temp-f-btn");

    tempFBtn.classList.add("white-outline");
    tempCBtn.classList.remove("white-outline");
};

const renderCityCountryName = async (cityJson) => {
    try {
        const cityNameValue = await getName(cityJson);
        const cityCountryValue = await getCountry(cityJson);
        const cityCountryTitleDOM = document.getElementById("city-country-title");
        cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;
    } catch (error) {
        
    }

};

const renderLocalTime = async (cityJson) => {
    try {
        const cityLocalTimeValue = await getLocalTime(cityJson);
        const localTimeDOM = document.getElementById("localtime");
        localTimeDOM.innerText = `${cityLocalTimeValue}`;
    } catch (error) {
        
    }
};

const renderTempC = async (cityJson) => {
    try {
        const cityTempCValue = await getTempC(cityJson);
        const tempCDOM = document.getElementById("temp");
        tempCDOM.innerHTML = `${cityTempCValue}°C`;
    } catch (error) {
        
    }
};

const renderTempF = async (cityJson) => {
    try {
        const cityTempFValue = await getTempF(cityJson);
        const tempFDOM = document.getElementById("temp");
        tempFDOM.innerHTML = `${cityTempFValue}°F`;
    } catch (error) {
        
    }
};

const renderFeelsLikeTempC = async (cityJson) => {
    try {
        const cityFeelsLikeTempCValue = await getFeelsLikeTempC(cityJson);
        const feelsLikeTempCDOM = document.getElementById("feels-like-temp");
        feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;
    } catch (error) {
        
    }
};

const renderFeelsLikeTempF = async (cityJson) => {
    try {
        const cityFeelsLikeTempFValue = await getFeelsLikeTempF(cityJson);
        const feelsLikeTempFDOM = document.getElementById("feels-like-temp");
        feelsLikeTempFDOM.innerText = `Feels like ${cityFeelsLikeTempFValue}°C`;
    } catch (error) {
        
    }
};

const renderWind = async (cityJson) => {
    try {
        const cityWindKmhValue = await getWindKmh(cityJson);
        const windDOM = document.getElementById("wind");
        windDOM.innerText = `${cityWindKmhValue} km/h`;
    } catch (error) {
        
    }
};

const renderPressure = async (cityJson) => {
    try {
        const cityPressureMbValue = await getPressureMb(cityJson);
        const pressureDOM = document.getElementById("pressure");
        pressureDOM.innerText = `${cityPressureMbValue} mb`;
    } catch (error) {
        
    }
};

const renderPrecip = async (cityJson) => {
    try {
        const cityPrecipMmValue = await getPrecipMm(cityJson);
        const precipDOM = document.getElementById("precip")
        precipDOM.innerText = `${cityPrecipMmValue} mm`;
    } catch (error) {
        
    }
};

const renderConditionIcon = async (cityJson) => {
    try {
        const iconUrl = await getConditionIcon(cityJson);
        const conditionIconDOM = document.getElementById("condition-icon");
        conditionIconDOM.src = iconUrl;
    } catch (error) {
        
    }
};

const renderCloud = async (cityJson) => {
    try {
        const cityCloudValue = await getCloud(cityJson);
        const cloudDOM = document.getElementById("cloud")
        cloudDOM.innerText = `${cityCloudValue}%`;
    } catch (error) {
        
    }
};

const renderHumidity = async (cityJson) => {
    try {
        const cityHumidityValue = await getHumidity(cityJson);
        const humidityDOM = document.getElementById("humidity");
        humidityDOM.innerText = `${cityHumidityValue}%`;
    } catch (error) {
        
    }
};

const renderUV = async (cityJson) => {
    try {
        const cityUVValue = await getUV(cityJson);
        const UVDOM = document.getElementById("uv");
        UVDOM.innerText = `${cityUVValue}/11`;
    } catch (error) {
        
    }
};

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

const renderWeather = async (cityName) => {
    refreshStatsSceleton();
    const cityJson = await getCityJson(cityName);

    if(!(cityJson instanceof Error)) {
        renderCityCountryName(cityJson);
        renderLocalTime(cityJson);
        renderWind(cityJson);
        renderPressure(cityJson);
        renderPrecip(cityJson);
        renderConditionIcon(cityJson);
        renderCloud(cityJson);
        renderHumidity(cityJson);
        renderUV(cityJson);

        if(temperature_mode === "C") {
            renderTempC(cityJson);
            renderFeelsLikeTempC(cityJson);
        } else {
            renderTempF(cityJson);
            renderFeelsLikeTempF(cityJson);
        }

    } else {
        removeStatsSceleton();
        document.querySelector("h3").innerText = "City not found!";
    }

    

    
        // removeStatsSceleton();
        // document.querySelector("h3").innerText = "City not found!";
    


    // if(cityJson !== null) {
    //     renderCityCountryName(cityJson);
    //     renderLocalTime(cityJson);
    //     renderTempC(cityJson);
    //     renderFeelsLikeTempC(cityJson);
    //     renderWind(cityJson);
    //     renderPressure(cityJson);
    //     renderPrecip(cityJson);
    //     renderConditionIcon(cityJson);
    //     renderCloud(cityJson);
    //     renderHumidity(cityJson);
    //     renderUV(cityJson);
    // } else {
    //     removeStatsSceleton();
    //     document.querySelector("h3").innerText = "City not found!";
    // }
};

const firstLoad = (cityName) => {
    searchBtnListener();
    searchFocusListener();
    tempCButtonListener();
    renderWeather(cityName);
};


export default firstLoad ;

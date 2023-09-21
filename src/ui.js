import loadData from "./responses";
import weatherController from "./weatherController";

// =============================================================================
// LISTENERS
// =============================================================================

const searchBtnListener = () => {
    const inputTextSearch = document.getElementById("input-text-search");
    const inputSearchBtn = document.getElementById("input-search-btn");

    inputSearchBtn.addEventListener("click", () => {
        const inputContent = inputTextSearch.value;
    
        if(inputContent !== "") {
            loadData(inputContent)
            .then(() => {
                const temperature_mode = weatherController.temperature_mode;
                renderLoadedData();
                const tempCBtn = document.getElementById("temp-c-btn");
                const tempFBtn = document.getElementById("temp-f-btn");
            
                tempCBtn.classList.add("white-outline");
                tempFBtn.classList.remove("white-outline");
            });
        }
    });

    inputTextSearch.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            event.preventDefault();
            inputSearchBtn.click();
        }
    });

};

const searchFocusListener = () => {
    const inputTextSearch = document.getElementById("input-text-search");
    const searchContainer = document.getElementById("search-container");

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

    tempCBtn.addEventListener("click", () => {
        const tempCBtn = document.getElementById("temp-c-btn");
        const tempFBtn = document.getElementById("temp-f-btn");
    
        tempCBtn.classList.add("white-outline");
        tempFBtn.classList.remove("white-outline");
        renderTempC();
        renderFeelsLikeTempC();
    });


};

const tempFButtonListener = () => {
    const tempFBtn = document.getElementById("temp-f-btn");

    tempFBtn.addEventListener("click", () => {
        const tempCBtn = document.getElementById("temp-c-btn");
        const tempFBtn = document.getElementById("temp-f-btn");
    
        tempFBtn.classList.add("white-outline");
        tempCBtn.classList.remove("white-outline");
        renderTempF();
        renderFeelsLikeTempF();
    });
};


// =============================================================================
// RENDER
// =============================================================================

const renderCityCountryName = () => {
    const cityName = weatherController.cityName;
    const countryName = weatherController.countryName;

    const cityCountryTitleDOM = document.getElementById("city-country-title");
    cityCountryTitleDOM.innerText = `${cityName}, ${countryName}`;
    
};

const renderLocalTime = () => {
    const localTime = weatherController.localTime;
    const localTimeDOM = document.getElementById("localtime");
    localTimeDOM.innerText = `${localTime}`;

};

const renderTempC = () => {
    const temp_c_value = weatherController.temp_c_value;
    const tempCDOM = document.getElementById("temp");
    tempCDOM.innerHTML = `${temp_c_value}°C`;
};

const renderTempF = () => {
    const temp_f_value = weatherController.temp_f_value;
    const tempFDOM = document.getElementById("temp");
    tempFDOM.innerHTML = `${temp_f_value}°F`;
};

const renderFeelsLikeTempC = () => {
    const feeling_temp_c_value = weatherController.feeling_temp_c_value;
    const feelsLikeTempCDOM = document.getElementById("feels-like-temp");
    feelsLikeTempCDOM.innerText = `Feels like ${feeling_temp_c_value}°C`;

};

const renderFeelsLikeTempF = () => {
    const feeling_temp_f_value = weatherController.feeling_temp_f_value;
    const feelsLikeTempFDOM = document.getElementById("feels-like-temp");
    feelsLikeTempFDOM.innerText = `Feels like ${feeling_temp_f_value}°F`;

};

const renderWind = () => {
    const wind_value = weatherController.wind_value;
    const windDOM = document.getElementById("wind");
    windDOM.innerText = `${wind_value} km/h`;
};

const renderPressure = () => {
    const pressure_value = weatherController.pressure_value;
    const pressureDOM = document.getElementById("pressure");
    pressureDOM.innerText = `${pressure_value} mb`;
};

const renderPrecip = () => {
    const precip_value = weatherController.precip_value;
    const precipDOM = document.getElementById("precip")
    precipDOM.innerText = `${precip_value} mm`;
};

const renderConditionIcon = () => {
    const conditionIconURL = weatherController.conditionIconURL;
    const conditionIconDOM = document.getElementById("condition-icon");
    conditionIconDOM.src = conditionIconURL;

};

const renderCloud = () => {
    const cloud_value = weatherController.cloud_value;
    const cloudDOM = document.getElementById("cloud")
    cloudDOM.innerText = `${cloud_value}%`;
};

const renderHumidity = () => {
    const humidity_value = weatherController.humidity_value;
    const humidityDOM = document.getElementById("humidity");
    humidityDOM.innerText = `${humidity_value}%`;
};

const renderUV = () => {
    const uv_index_value = weatherController.uv_index_value;
    const UVDOM = document.getElementById("uv");
    UVDOM.innerText = `${uv_index_value}/11`;
};

const renderLoadedData = () => {

    renderCityCountryName();
    renderLocalTime();
    renderWind();
    renderPressure();
    renderPrecip();
    renderConditionIcon();
    renderCloud();
    renderHumidity();
    renderUV();

    if(weatherController.temperature_mode === "C") {
        renderTempC();
        renderFeelsLikeTempC();
    } else {
        renderTempF();
        renderFeelsLikeTempF();
    }
};


// =============================================================================
// NOT FOUND ERROR
// =============================================================================

const showCityNotFoundError = () => {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.style.display = "none";

    const city_not_found_error = document.getElementById("city-not-found-error");
    city_not_found_error.style.display = "flex";
};

const hideCityNotFoundError = () => {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.style.display = "flex";

    const city_not_found_error = document.getElementById("city-not-found-error");
    city_not_found_error.style.display = "none";
}

// =============================================================================
// FIRST LOAD
// =============================================================================

const firstLoad = (cityName) => {
    searchBtnListener();
    searchFocusListener();
    tempCButtonListener();
    tempFButtonListener();

    loadData(cityName)
        .then(() => {
            renderLoadedData();
        })
        .catch((e) => {
            console.log(e);
        });
};

export { firstLoad, showCityNotFoundError, hideCityNotFoundError };

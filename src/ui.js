import { getCityJson, getTempC, getFeelsLikeTempC, getWindKmh, getPressureMb, getPrecipMm, getName, getCountry, getLocalTime, getConditionIcon, getCloud, getHumidity, getUV } from "./Weather";

const inputTextSearch = document.getElementById("input-text-search");
const inputSearchBtn = document.getElementById("input-search-btn");
const searchContainer = document.getElementById("search-container");

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
        const tempCDOM = document.getElementById("temp-C");
        tempCDOM.innerHTML = `${cityTempCValue}°C`;
    } catch (error) {
        
    }
};

const renderFeelsLikeTempC = async (cityJson) => {
    try {
        const cityFeelsLikeTempCValue = await getFeelsLikeTempC(cityJson);
        const feelsLikeTempCDOM = document.getElementById("feels-like-temp-C");
        feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;
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

const renderWeather = async (cityName) => {
    const cityJson = await getCityJson(cityName);
    renderCityCountryName(cityJson);
    renderLocalTime(cityJson);
    renderTempC(cityJson);
    renderFeelsLikeTempC(cityJson);
    renderWind(cityJson);
    renderPressure(cityJson);
    renderPrecip(cityJson);
    renderConditionIcon(cityJson);
    renderCloud(cityJson);
    renderHumidity(cityJson);
    renderUV(cityJson);
};

export { searchBtnListener, searchFocusListener, renderWeather };

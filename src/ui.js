import { getCityJson, getTempC, getFeelsLikeTempC, getWindKmh, getPressureMb, getPrecipMm, getName, getCountry, getLocalTime, getConditionIcon } from "./Weather";

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
    const cityNameValue = await getName(cityJson);
    const cityCountryValue = await getCountry(cityJson);
    const cityCountryTitleDOM = document.getElementById("city-country-title");
    cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;
};

const renderLocalTime = async (cityJson) => {
    const cityLocalTimeValue = await getLocalTime(cityJson);
    const localTimeDOM = document.getElementById("localtime");
    localTimeDOM.innerText = `${cityLocalTimeValue}`;
};

const renderTempC = async (cityJson) => {
    const cityTempCValue = await getTempC(cityJson);
    const tempCDOM = document.getElementById("temp-C");
    tempCDOM.innerHTML = `${cityTempCValue}°C`;
};

const renderFeelsLikeTempC = async (cityJson) => {
    const cityFeelsLikeTempCValue = await getFeelsLikeTempC(cityJson);
    const feelsLikeTempCDOM = document.getElementById("feels-like-temp-C");
    feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;
};

const renderWind = async (cityJson) => {
    const cityWindKmhValue = await getWindKmh(cityJson);
    const windDOM = document.getElementById("wind");
    windDOM.innerText = `${cityWindKmhValue} km/h`;
};

const renderPressure = async (cityJson) => {
    const cityPressureMbValue = await getPressureMb(cityJson);
    const pressureDOM = document.getElementById("pressure");
    pressureDOM.innerText = `${cityPressureMbValue} mb`;
};

const renderPrecip = async (cityJson) => {
    const cityPrecipMmValue = await getPrecipMm(cityJson);
    const precipDOM = document.getElementById("precip")
    precipDOM.innerText = `${cityPrecipMmValue} mm`;
};

const renderConditionIcon = async (cityJson) => {
    const iconUrl = await getConditionIcon(cityJson);
    const conditionIconDOM = document.getElementById("condition-icon");
    conditionIconDOM.src = iconUrl;
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
};

export { searchBtnListener, searchFocusListener, renderWeather };


// const renderWeather = async (cityName) => {
//     const cityJson = await getCityJson(cityName);
//     const cityNameValue = await getName(cityJson);
//     const cityCountryValue = await getCountry(cityJson);
//     const cityLocalTimeValue = await getLocalTime(cityJson);
//     const cityTempCValue = await getTempC(cityJson);
//     const cityFeelsLikeTempCValue = await getFeelsLikeTempC(cityJson);
//     const cityWindKmhValue = await getWindKmh(cityJson);
//     const cityPressureMbValue = await getPressureMb(cityJson);
//     const cityPrecipMmValue = await getPrecipMm(cityJson);


//     const cityCountryTitleDOM = document.getElementById("city-country-title");
//     const localTimeDOM = document.getElementById("localtime");
//     const tempCDOM = document.getElementById("temp-C");
//     const feelsLikeTempCDOM = document.getElementById("feels-like-temp-C");
//     const windDOM = document.getElementById("wind");
//     const pressureDOM = document.getElementById("pressure");
//     const precipDOM = document.getElementById("precip")

//     cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;
//     localTimeDOM.innerText = `${cityLocalTimeValue}`;
//     tempCDOM.innerText = `${cityTempCValue}°C`;
//     feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;
//     windDOM.innerText = `${cityWindKmhValue}`;
//     pressureDOM.innerText = `${cityPressureMbValue}`;
//     precipDOM.innerText = `${cityPrecipMmValue}`;
// };
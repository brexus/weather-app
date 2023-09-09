import weatherController from "./weatherController";
import { showCityNotFoundError, hideCityNotFoundError } from "./ui";

async function getCityJson(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d60d06a938a401181691445230908&q=${cityName}`, {mode: 'cors'});
    // if(!response.ok) throw new Error(`City ${cityName} not found`);
    const data = await response.json();
    return data;

};

async function getName(cityJson) {
    const data = await cityJson;
    const name = await data.location.name;
    return name;
};

async function getCountry(cityJson) {
    const data = await cityJson;
    const countryName = await data.location.country;
    return countryName;
};

async function getLocalTime(cityJson) {
    const data = await cityJson;
    const localTime = await data.location.localtime;
    return localTime;
};

async function getTempC(cityJson) {
    const data = await cityJson;
    const tempC = await data.current.temp_c;
    return tempC;
};

async function getTempF(cityJson) {
    const data = await cityJson;
    const tempF = await data.current.temp_f;
    return tempF;
};

async function getFeelsLikeTempC(cityJson) {
    const data = await cityJson;
    const feelsLikeTempC = await data.current.feelslike_c;
    return feelsLikeTempC;
};

async function getFeelsLikeTempF(cityJson) {
    const data = await cityJson;
    const feelsLikeTempF = await data.current.feelslike_f;
    return feelsLikeTempF;
};

async function getWindKmh(cityJson) {
    const data = await cityJson;
    const windKph = await data.current.wind_kph;
    return windKph;
};

async function getPressureMb(cityJson) {
    const data = await cityJson;
    const pressureMb = await data.current.pressure_mb;
    return pressureMb;
};

async function getPrecipMm(cityJson) {
    const data = await cityJson;
    const precipMm = await data.current.precip_mm;
    return precipMm;
};

async function getConditionIcon(cityJson) {
    const data = await cityJson;
    const iconUrl = await data.current.condition.icon;
    return iconUrl;
};

async function getCloud(cityJson) {
    const data = await cityJson;
    const cloud = await data.current.cloud;
    return cloud;
};

async function getHumidity(cityJson) {
    const data = await cityJson;
    const humidity = await data.current.humidity;
    return humidity;
};

async function getUV(cityJson) {
    const data = await cityJson;
    const uv = await data.current.uv;
    return uv;
};

async function loadData(cityName) {

    try {
        weatherController.cityDataJSON = await getCityJson(cityName);
        const cityDataJSON = weatherController.cityDataJSON;
    
        weatherController.temp_c_value = await getTempC(cityDataJSON);
        weatherController.feeling_temp_c_value = await getFeelsLikeTempC(cityDataJSON);
    
        weatherController.temp_f_value = await getTempF(cityDataJSON);
        weatherController.feeling_temp_f_value = await getFeelsLikeTempF(cityDataJSON);
    
        weatherController.wind_value = await getWindKmh(cityDataJSON);
        weatherController.pressure_value = await getPressureMb(cityDataJSON);
        weatherController.precip_value = await getPrecipMm(cityDataJSON);
        weatherController.cloud_value = await getCloud(cityDataJSON);
        weatherController.humidity_value = await getHumidity(cityDataJSON);
        weatherController.uv_index_value = await getUV(cityDataJSON);
    
        weatherController.cityName = await getName(cityDataJSON);
        weatherController.countryName = await getCountry(cityDataJSON);
        weatherController.localTime = await getLocalTime(cityDataJSON);
        weatherController.conditionIconURL = await getConditionIcon(cityDataJSON);

        hideCityNotFoundError();
    } catch (error) {
        showCityNotFoundError();
    }
};

export default loadData;

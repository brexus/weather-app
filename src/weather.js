
async function getCityJson(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d60d06a938a401181691445230908&q=${cityName}`, {mode: 'cors'});
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

async function getFeelsLikeTempC(cityJson) {
    const data = await cityJson;
    const feelsLikeTempC = await data.current.feelslike_c;
    return feelsLikeTempC;
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

async function getData(cityName) {
    const cityJson = await getCityJson(cityName);
    const cityTempC = await getTempC(cityJson);
    const cityFeelsLikeTempC = await getFeelsLikeTempC(cityJson);
    const cityWindKmh = await getWindKmh(cityJson);
    const cityPressureMb = await getPressureMb(cityJson);
    const cityPrecipMm = await getPrecipMm(cityJson);

    console.log(`Miasto: ${cityName}\n`);
    console.log(`Temperatura: ${cityTempC} °C \n`);
    console.log(`Temperatura odczuwalna: ${cityFeelsLikeTempC} °C \n`);
    console.log(`Opady: ${cityPrecipMm} mm \n`);
    console.log(`Wiatr: ${cityWindKmh} km/h`);
    console.log(`Cisnienie: ${cityPressureMb} mb`);

};

export { getName, getCountry, getCityJson, getTempC, getFeelsLikeTempC, getWindKmh, getPressureMb, getPrecipMm, getLocalTime, getConditionIcon };
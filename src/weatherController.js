
const weatherController = (() => {
    let temperature_mode = "C";

    let cityDataJSON;

    let cityName;
    let countryName;
    let localTime;
    
    let conditionIconURL;

    let temp_c_value;
    let feeling_temp_c_value;
    
    let temp_f_value;
    let feeling_temp_f_value;
    
    let wind_value;
    let pressure_value;
    let precip_value;
    let cloud_value;
    let humidity_value;
    let uv_index_value;


    return { 
        temperature_mode, cityDataJSON, temp_c_value, 
        feeling_temp_c_value, temp_f_value, feeling_temp_f_value, 
        wind_value, pressure_value, precip_value, cloud_value, 
        humidity_value, uv_index_value, cityName, countryName,
        localTime, conditionIconURL
    };
})();

export default weatherController;
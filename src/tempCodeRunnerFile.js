async function getCityJson(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d60d06a938a401181691445230908&q=${cityName}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    return data;
};

getCityJson("London");
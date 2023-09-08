/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Weather.js":
/*!************************!*\
  !*** ./src/Weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCityJson: () => (/* binding */ getCityJson),\n/* harmony export */   getCloud: () => (/* binding */ getCloud),\n/* harmony export */   getConditionIcon: () => (/* binding */ getConditionIcon),\n/* harmony export */   getCountry: () => (/* binding */ getCountry),\n/* harmony export */   getFeelsLikeTempC: () => (/* binding */ getFeelsLikeTempC),\n/* harmony export */   getFeelsLikeTempF: () => (/* binding */ getFeelsLikeTempF),\n/* harmony export */   getHumidity: () => (/* binding */ getHumidity),\n/* harmony export */   getLocalTime: () => (/* binding */ getLocalTime),\n/* harmony export */   getName: () => (/* binding */ getName),\n/* harmony export */   getPrecipMm: () => (/* binding */ getPrecipMm),\n/* harmony export */   getPressureMb: () => (/* binding */ getPressureMb),\n/* harmony export */   getTempC: () => (/* binding */ getTempC),\n/* harmony export */   getTempF: () => (/* binding */ getTempF),\n/* harmony export */   getUV: () => (/* binding */ getUV),\n/* harmony export */   getWindKmh: () => (/* binding */ getWindKmh)\n/* harmony export */ });\n\r\nasync function getCityJson(cityName) {\r\n    try {\r\n        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d60d06a938a401181691445230908&q=${cityName}`, {mode: 'cors'});\r\n        if(!response.ok) throw new Error(`City ${cityName} not found`);\r\n        const data = await response.json();\r\n        return data;\r\n    } catch (error) {\r\n        return error;\r\n    }\r\n};\r\n\r\nasync function getName(cityJson) {\r\n    const data = await cityJson;\r\n    const name = await data.location.name;\r\n    return name;\r\n};\r\n\r\nasync function getCountry(cityJson) {\r\n    const data = await cityJson;\r\n    const countryName = await data.location.country;\r\n    return countryName;\r\n};\r\n\r\nasync function getLocalTime(cityJson) {\r\n    const data = await cityJson;\r\n    const localTime = await data.location.localtime;\r\n    return localTime;\r\n};\r\n\r\nasync function getTempC(cityJson) {\r\n    const data = await cityJson;\r\n    const tempC = await data.current.temp_c;\r\n    return tempC;\r\n};\r\n\r\nasync function getTempF(cityJson) {\r\n    const data = await cityJson;\r\n    const tempF = await data.current.temp_f;\r\n    return tempF;\r\n};\r\n\r\nasync function getFeelsLikeTempC(cityJson) {\r\n    const data = await cityJson;\r\n    const feelsLikeTempC = await data.current.feelslike_c;\r\n    return feelsLikeTempC;\r\n};\r\n\r\nasync function getFeelsLikeTempF(cityJson) {\r\n    const data = await cityJson;\r\n    const feelsLikeTempF = await data.current.feelslike_f;\r\n    return feelsLikeTempF;\r\n};\r\n\r\nasync function getWindKmh(cityJson) {\r\n    const data = await cityJson;\r\n    const windKph = await data.current.wind_kph;\r\n    return windKph;\r\n};\r\n\r\nasync function getPressureMb(cityJson) {\r\n    const data = await cityJson;\r\n    const pressureMb = await data.current.pressure_mb;\r\n    return pressureMb;\r\n};\r\n\r\nasync function getPrecipMm(cityJson) {\r\n    const data = await cityJson;\r\n    const precipMm = await data.current.precip_mm;\r\n    return precipMm;\r\n};\r\n\r\nasync function getConditionIcon(cityJson) {\r\n    const data = await cityJson;\r\n    const iconUrl = await data.current.condition.icon;\r\n    return iconUrl;\r\n};\r\n\r\nasync function getCloud(cityJson) {\r\n    const data = await cityJson;\r\n    const cloud = await data.current.cloud;\r\n    return cloud;\r\n};\r\n\r\nasync function getHumidity(cityJson) {\r\n    const data = await cityJson;\r\n    const humidity = await data.current.humidity;\r\n    return humidity;\r\n};\r\n\r\nasync function getUV(cityJson) {\r\n    const data = await cityJson;\r\n    const uv = await data.current.uv;\r\n    return uv;\r\n};\r\n\r\nasync function getData(cityName) {\r\n    const cityJson = await getCityJson(cityName);\r\n    const cityTempC = await getTempC(cityJson);\r\n    const cityFeelsLikeTempC = await getFeelsLikeTempC(cityJson);\r\n    const cityWindKmh = await getWindKmh(cityJson);\r\n    const cityPressureMb = await getPressureMb(cityJson);\r\n    const cityPrecipMm = await getPrecipMm(cityJson);\r\n\r\n    console.log(`Miasto: ${cityName}\\n`);\r\n    console.log(`Temperatura: ${cityTempC} °C \\n`);\r\n    console.log(`Temperatura odczuwalna: ${cityFeelsLikeTempC} °C \\n`);\r\n    console.log(`Opady: ${cityPrecipMm} mm \\n`);\r\n    console.log(`Wiatr: ${cityWindKmh} km/h`);\r\n    console.log(`Cisnienie: ${cityPressureMb} mb`);\r\n\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/Weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Lublin\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/Weather.js\");\n\r\n\r\nconst inputTextSearch = document.getElementById(\"input-text-search\");\r\nconst inputSearchBtn = document.getElementById(\"input-search-btn\");\r\nconst searchContainer = document.getElementById(\"search-container\");\r\n\r\nlet temperature_mode = \"C\";\r\n\r\nconst searchBtnListener = () => {\r\n    inputSearchBtn.addEventListener(\"click\", () => {\r\n        const inputContent = inputTextSearch.value;\r\n    \r\n        if(inputContent !== \"\") {\r\n            renderWeather(inputContent);\r\n        }\r\n    });\r\n\r\n};\r\n\r\nconst searchFocusListener = () => {\r\n    inputTextSearch.addEventListener(\"focus\", () => {\r\n        searchContainer.classList.remove(\"no-outline\");\r\n        searchContainer.classList.add(\"white-outline\");\r\n    });\r\n\r\n    inputTextSearch.addEventListener(\"blur\", () => {\r\n        searchContainer.classList.remove(\"white-outline\");\r\n        searchContainer.classList.add(\"no-outline\");\r\n    });\r\n};\r\n\r\nconst tempCButtonListener = () => {\r\n    const tempCBtn = document.getElementById(\"temp-c-btn\");\r\n\r\n    tempCBtn.addEventListener(\"click\", turn_on_highlights_temp_C);\r\n};\r\n\r\n// podświetla przycisk zmiany na temperature Celsjusza\r\nconst turn_on_highlights_temp_C = () => {\r\n    const tempCBtn = document.getElementById(\"temp-c-btn\");\r\n    const tempFBtn = document.getElementById(\"temp-f-btn\");\r\n\r\n    tempCBtn.classList.add(\"white-outline\");\r\n    tempFBtn.classList.remove(\"white-outline\");\r\n    \r\n\r\n};\r\n\r\n// podświetla przycisk zmiany na temperature Farenheita\r\nconst turn_on_highlights_temp_F = () => {\r\n    const tempCBtn = document.getElementById(\"temp-c-btn\");\r\n    const tempFBtn = document.getElementById(\"temp-f-btn\");\r\n\r\n    tempFBtn.classList.add(\"white-outline\");\r\n    tempCBtn.classList.remove(\"white-outline\");\r\n};\r\n\r\nconst renderCityCountryName = async (cityJson) => {\r\n    try {\r\n        const cityNameValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getName)(cityJson);\r\n        const cityCountryValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCountry)(cityJson);\r\n        const cityCountryTitleDOM = document.getElementById(\"city-country-title\");\r\n        cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;\r\n    } catch (error) {\r\n        \r\n    }\r\n\r\n};\r\n\r\nconst renderLocalTime = async (cityJson) => {\r\n    try {\r\n        const cityLocalTimeValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getLocalTime)(cityJson);\r\n        const localTimeDOM = document.getElementById(\"localtime\");\r\n        localTimeDOM.innerText = `${cityLocalTimeValue}`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderTempC = async (cityJson) => {\r\n    try {\r\n        const cityTempCValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getTempC)(cityJson);\r\n        const tempCDOM = document.getElementById(\"temp\");\r\n        tempCDOM.innerHTML = `${cityTempCValue}°C`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderTempF = async (cityJson) => {\r\n    try {\r\n        const cityTempFValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getTempF)(cityJson);\r\n        const tempFDOM = document.getElementById(\"temp\");\r\n        tempFDOM.innerHTML = `${cityTempFValue}°F`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderFeelsLikeTempC = async (cityJson) => {\r\n    try {\r\n        const cityFeelsLikeTempCValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getFeelsLikeTempC)(cityJson);\r\n        const feelsLikeTempCDOM = document.getElementById(\"feels-like-temp\");\r\n        feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderFeelsLikeTempF = async (cityJson) => {\r\n    try {\r\n        const cityFeelsLikeTempFValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getFeelsLikeTempF)(cityJson);\r\n        const feelsLikeTempFDOM = document.getElementById(\"feels-like-temp\");\r\n        feelsLikeTempFDOM.innerText = `Feels like ${cityFeelsLikeTempFValue}°C`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderWind = async (cityJson) => {\r\n    try {\r\n        const cityWindKmhValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getWindKmh)(cityJson);\r\n        const windDOM = document.getElementById(\"wind\");\r\n        windDOM.innerText = `${cityWindKmhValue} km/h`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderPressure = async (cityJson) => {\r\n    try {\r\n        const cityPressureMbValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getPressureMb)(cityJson);\r\n        const pressureDOM = document.getElementById(\"pressure\");\r\n        pressureDOM.innerText = `${cityPressureMbValue} mb`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderPrecip = async (cityJson) => {\r\n    try {\r\n        const cityPrecipMmValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getPrecipMm)(cityJson);\r\n        const precipDOM = document.getElementById(\"precip\")\r\n        precipDOM.innerText = `${cityPrecipMmValue} mm`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderConditionIcon = async (cityJson) => {\r\n    try {\r\n        const iconUrl = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getConditionIcon)(cityJson);\r\n        const conditionIconDOM = document.getElementById(\"condition-icon\");\r\n        conditionIconDOM.src = iconUrl;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderCloud = async (cityJson) => {\r\n    try {\r\n        const cityCloudValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCloud)(cityJson);\r\n        const cloudDOM = document.getElementById(\"cloud\")\r\n        cloudDOM.innerText = `${cityCloudValue}%`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderHumidity = async (cityJson) => {\r\n    try {\r\n        const cityHumidityValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getHumidity)(cityJson);\r\n        const humidityDOM = document.getElementById(\"humidity\");\r\n        humidityDOM.innerText = `${cityHumidityValue}%`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst renderUV = async (cityJson) => {\r\n    try {\r\n        const cityUVValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getUV)(cityJson);\r\n        const UVDOM = document.getElementById(\"uv\");\r\n        UVDOM.innerText = `${cityUVValue}/11`;\r\n    } catch (error) {\r\n        \r\n    }\r\n};\r\n\r\nconst removeStatsSceleton = () => {\r\n    const weatherContainer = document.getElementById(\"weather-container\");\r\n    weatherContainer.innerHTML = `<h3></h3>`;\r\n};\r\n\r\nconst refreshStatsSceleton = () => {\r\n    const weatherContainer = document.getElementById(\"weather-container\");\r\n    weatherContainer.innerHTML = \r\n    `<div id=\"city-name-weather\">\r\n        <h1 id=\"city-country-title\">-</h1>\r\n        <h2 id=\"localtime\">-</h2>\r\n    </div>\r\n\r\n    <div id=\"weather-stats-container\">\r\n        <div id=\"temp-container\">\r\n            <div id=\"temp-icon-container\">\r\n                <img src=\"\" alt=\"\" id=\"condition-icon\">\r\n                <h1 id=\"temp\">-°C</h1>\r\n            </div>\r\n\r\n            <h2 id=\"feels-like-temp\">Feels like - °C</h2>\r\n        </div>\r\n        \r\n        <div id=\"weather-stats\">\r\n            <div>\r\n                <h1>Wind</h1>\r\n                <h2 id=\"wind\">-</h2>\r\n            </div>\r\n\r\n            <div>\r\n                <h1>Pressure</h1>\r\n                <h2 id=\"pressure\">-</h2>\r\n            </div>\r\n\r\n            <div>\r\n                <h1>Precip</h1>\r\n                <h2 id=\"precip\">-</h2>\r\n            </div>\r\n\r\n            <div>\r\n                <h1>Cloud</h1>\r\n                <h2 id=\"cloud\">-</h2>\r\n            </div>\r\n\r\n            <div>\r\n                <h1>Humidity</h1>\r\n                <h2 id=\"humidity\">-</h2>\r\n            </div>\r\n\r\n            <div>\r\n                <h1>UV index</h1>\r\n                <h2 id=\"uv\">-</h2>\r\n            </div>\r\n        </div>\r\n    </div>`;\r\n}\r\n\r\nconst renderWeather = async (cityName) => {\r\n    refreshStatsSceleton();\r\n    const cityJson = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCityJson)(cityName);\r\n\r\n    if(!(cityJson instanceof Error)) {\r\n        renderCityCountryName(cityJson);\r\n        renderLocalTime(cityJson);\r\n        renderWind(cityJson);\r\n        renderPressure(cityJson);\r\n        renderPrecip(cityJson);\r\n        renderConditionIcon(cityJson);\r\n        renderCloud(cityJson);\r\n        renderHumidity(cityJson);\r\n        renderUV(cityJson);\r\n\r\n        if(temperature_mode === \"C\") {\r\n            renderTempC(cityJson);\r\n            renderFeelsLikeTempC(cityJson);\r\n        } else {\r\n            renderTempF(cityJson);\r\n            renderFeelsLikeTempF(cityJson);\r\n        }\r\n\r\n    } else {\r\n        removeStatsSceleton();\r\n        document.querySelector(\"h3\").innerText = \"City not found!\";\r\n    }\r\n\r\n    \r\n\r\n    \r\n        // removeStatsSceleton();\r\n        // document.querySelector(\"h3\").innerText = \"City not found!\";\r\n    \r\n\r\n\r\n    // if(cityJson !== null) {\r\n    //     renderCityCountryName(cityJson);\r\n    //     renderLocalTime(cityJson);\r\n    //     renderTempC(cityJson);\r\n    //     renderFeelsLikeTempC(cityJson);\r\n    //     renderWind(cityJson);\r\n    //     renderPressure(cityJson);\r\n    //     renderPrecip(cityJson);\r\n    //     renderConditionIcon(cityJson);\r\n    //     renderCloud(cityJson);\r\n    //     renderHumidity(cityJson);\r\n    //     renderUV(cityJson);\r\n    // } else {\r\n    //     removeStatsSceleton();\r\n    //     document.querySelector(\"h3\").innerText = \"City not found!\";\r\n    // }\r\n};\r\n\r\nconst firstLoad = (cityName) => {\r\n    searchBtnListener();\r\n    searchFocusListener();\r\n    tempCButtonListener();\r\n    renderWeather(cityName);\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\r\n\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
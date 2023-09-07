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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCityJson: () => (/* binding */ getCityJson),\n/* harmony export */   getCountry: () => (/* binding */ getCountry),\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   getFeelsLikeTempC: () => (/* binding */ getFeelsLikeTempC),\n/* harmony export */   getLocalTime: () => (/* binding */ getLocalTime),\n/* harmony export */   getName: () => (/* binding */ getName),\n/* harmony export */   getPrecipMm: () => (/* binding */ getPrecipMm),\n/* harmony export */   getPressureMb: () => (/* binding */ getPressureMb),\n/* harmony export */   getTempC: () => (/* binding */ getTempC),\n/* harmony export */   getWindKmh: () => (/* binding */ getWindKmh)\n/* harmony export */ });\n\r\nasync function getCityJson(cityName) {\r\n    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9d60d06a938a401181691445230908&q=${cityName}`, {mode: 'cors'});\r\n    const data = await response.json();\r\n    return data;\r\n};\r\n\r\nasync function getName(cityJson) {\r\n    const data = await cityJson;\r\n    const name = await data.location.name;\r\n    return name;\r\n};\r\n\r\nasync function getCountry(cityJson) {\r\n    const data = await cityJson;\r\n    const countryName = await data.location.country;\r\n    return countryName;\r\n};\r\n\r\nasync function getLocalTime(cityJson) {\r\n    const data = await cityJson;\r\n    const localTime = await data.location.localtime;\r\n    return localTime;\r\n};\r\n\r\nasync function getTempC(cityJson) {\r\n    const data = await cityJson;\r\n    const tempC = await data.current.temp_c;\r\n    return tempC;\r\n};\r\n\r\nasync function getFeelsLikeTempC(cityJson) {\r\n    const data = await cityJson;\r\n    const feelsLikeTempC = await data.current.feelslike_c;\r\n    return feelsLikeTempC;\r\n};\r\n\r\nasync function getWindKmh(cityJson) {\r\n    const data = await cityJson;\r\n    const windKph = await data.current.wind_kph;\r\n    return windKph;\r\n};\r\n\r\nasync function getPressureMb(cityJson) {\r\n    const data = await cityJson;\r\n    const pressureMb = await data.current.pressure_mb;\r\n    return pressureMb;\r\n};\r\n\r\nasync function getPrecipMm(cityJson) {\r\n    const data = await cityJson;\r\n    const precipMm = await data.current.precip_mm;\r\n    return precipMm;\r\n};\r\n\r\n\r\n\r\nasync function getData(cityName) {\r\n    const cityJson = await getCityJson(cityName);\r\n    const cityTempC = await getTempC(cityJson);\r\n    const cityFeelsLikeTempC = await getFeelsLikeTempC(cityJson);\r\n    const cityWindKmh = await getWindKmh(cityJson);\r\n    const cityPressureMb = await getPressureMb(cityJson);\r\n    const cityPrecipMm = await getPrecipMm(cityJson);\r\n\r\n    console.log(`Miasto: ${cityName}\\n`);\r\n    console.log(`Temperatura: ${cityTempC} °C \\n`);\r\n    console.log(`Temperatura odczuwalna: ${cityFeelsLikeTempC} °C \\n`);\r\n    console.log(`Opady: ${cityPrecipMm} mm \\n`);\r\n    console.log(`Wiatr: ${cityWindKmh} km/h`);\r\n    console.log(`Cisnienie: ${cityPressureMb} mb`);\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/Weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.searchBtnListener)();\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.searchFocusListener)();\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderWeather)(\"Lublin\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWeather: () => (/* binding */ renderWeather),\n/* harmony export */   searchBtnListener: () => (/* binding */ searchBtnListener),\n/* harmony export */   searchFocusListener: () => (/* binding */ searchFocusListener)\n/* harmony export */ });\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/Weather.js\");\n\r\n\r\nconst inputTextSearch = document.getElementById(\"input-text-search\");\r\nconst inputSearchBtn = document.getElementById(\"input-search-btn\");\r\nconst searchContainer = document.getElementById(\"search-container\");\r\n\r\nconst searchBtnListener = () => {\r\n    inputSearchBtn.addEventListener(\"click\", () => {\r\n        const inputContent = inputSearchBtn.value;\r\n    \r\n        if(inputContent !== \"\") {\r\n            (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getData)(inputContent);\r\n        }\r\n    });\r\n\r\n};\r\n\r\nconst searchFocusListener = () => {\r\n    \r\n    inputTextSearch.addEventListener(\"focus\", () => {\r\n        searchContainer.classList.remove(\"no-outline\");\r\n        searchContainer.classList.add(\"white-outline\");\r\n    });\r\n\r\n    inputTextSearch.addEventListener(\"blur\", () => {\r\n        searchContainer.classList.remove(\"white-outline\");\r\n        searchContainer.classList.add(\"no-outline\");\r\n    });\r\n};\r\n\r\nconst renderCityCountryName = async (cityJson) => {\r\n    const cityNameValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getName)(cityJson);\r\n    const cityCountryValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCountry)(cityJson);\r\n    const cityCountryTitleDOM = document.getElementById(\"city-country-title\");\r\n    cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;\r\n};\r\n\r\nconst renderLocalTime = async (cityJson) => {\r\n    const cityLocalTimeValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getLocalTime)(cityJson);\r\n    const localTimeDOM = document.getElementById(\"localtime\");\r\n    localTimeDOM.innerText = `${cityLocalTimeValue}`;\r\n};\r\n\r\nconst renderTempC = async (cityJson) => {\r\n    const cityTempCValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getTempC)(cityJson);\r\n    const tempCDOM = document.getElementById(\"temp-C\");\r\n    tempCDOM.innerText = `${cityTempCValue}°C`;\r\n};\r\n\r\nconst renderFeelsLikeTempC = async (cityJson) => {\r\n    const cityFeelsLikeTempCValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getFeelsLikeTempC)(cityJson);\r\n    const feelsLikeTempCDOM = document.getElementById(\"feels-like-temp-C\");\r\n    feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;\r\n};\r\n\r\nconst renderWind = async (cityJson) => {\r\n    const cityWindKmhValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getWindKmh)(cityJson);\r\n    const windDOM = document.getElementById(\"wind\");\r\n    windDOM.innerText = `${cityWindKmhValue} km/h`;\r\n};\r\n\r\nconst renderPressure = async (cityJson) => {\r\n    const cityPressureMbValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getPressureMb)(cityJson);\r\n    const pressureDOM = document.getElementById(\"pressure\");\r\n    pressureDOM.innerText = `${cityPressureMbValue} mb`;\r\n};\r\n\r\nconst renderPrecip = async (cityJson) => {\r\n    const cityPrecipMmValue = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getPrecipMm)(cityJson);\r\n    const precipDOM = document.getElementById(\"precip\")\r\n    precipDOM.innerText = `${cityPrecipMmValue} mm`;\r\n};\r\n\r\nconst renderWeather = async (cityName) => {\r\n    const cityJson = await (0,_Weather__WEBPACK_IMPORTED_MODULE_0__.getCityJson)(cityName);\r\n    renderCityCountryName(cityJson);\r\n    renderLocalTime(cityJson);\r\n    renderTempC(cityJson);\r\n    renderFeelsLikeTempC(cityJson);\r\n    renderWind(cityJson);\r\n    renderPressure(cityJson);\r\n    renderPrecip(cityJson);\r\n};\r\n\r\n\r\n\r\n\r\n// const renderWeather = async (cityName) => {\r\n//     const cityJson = await getCityJson(cityName);\r\n//     const cityNameValue = await getName(cityJson);\r\n//     const cityCountryValue = await getCountry(cityJson);\r\n//     const cityLocalTimeValue = await getLocalTime(cityJson);\r\n//     const cityTempCValue = await getTempC(cityJson);\r\n//     const cityFeelsLikeTempCValue = await getFeelsLikeTempC(cityJson);\r\n//     const cityWindKmhValue = await getWindKmh(cityJson);\r\n//     const cityPressureMbValue = await getPressureMb(cityJson);\r\n//     const cityPrecipMmValue = await getPrecipMm(cityJson);\r\n\r\n\r\n//     const cityCountryTitleDOM = document.getElementById(\"city-country-title\");\r\n//     const localTimeDOM = document.getElementById(\"localtime\");\r\n//     const tempCDOM = document.getElementById(\"temp-C\");\r\n//     const feelsLikeTempCDOM = document.getElementById(\"feels-like-temp-C\");\r\n//     const windDOM = document.getElementById(\"wind\");\r\n//     const pressureDOM = document.getElementById(\"pressure\");\r\n//     const precipDOM = document.getElementById(\"precip\")\r\n\r\n//     cityCountryTitleDOM.innerText = `${cityNameValue}, ${cityCountryValue}`;\r\n//     localTimeDOM.innerText = `${cityLocalTimeValue}`;\r\n//     tempCDOM.innerText = `${cityTempCValue}°C`;\r\n//     feelsLikeTempCDOM.innerText = `Feels like ${cityFeelsLikeTempCValue}°C`;\r\n//     windDOM.innerText = `${cityWindKmhValue}`;\r\n//     pressureDOM.innerText = `${cityPressureMbValue}`;\r\n//     precipDOM.innerText = `${cityPrecipMmValue}`;\r\n// };\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

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
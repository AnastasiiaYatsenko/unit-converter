const meterToFeet =  3.28083991;
const feetToMeter =  0.3048;
const literToGallon = 0.264172052;
const gallonToLiter = 3.78541178;
const kiloToPound = 2.20462262;
const poundToKilo = 0.45359237;

let numberInput = document.getElementById("number-input");
let convertBtn = document.getElementById("convert-btn");
let lengthConvert = document.getElementById("length-convert");
let volumeConvert = document.getElementById("volume-convert");
let massConvert = document.getElementById("mass-convert");
let temperatureConvert = document.getElementById("temperature-convert");

convertBtn.addEventListener("click", function convertUnits() {
  let formuleMeterToFeet = parseFloat(numberInput.value * meterToFeet).toFixed(3);
  let formuleFeetToMeter = parseFloat(numberInput.value * feetToMeter).toFixed(3);
  let formuleliterToGallon = parseFloat(numberInput.value * literToGallon).toFixed(3);
  let formuleGallonToLiter = parseFloat(numberInput.value * gallonToLiter).toFixed(3);
  let formuleKiloToPound = parseFloat(numberInput.value * kiloToPound).toFixed(3);
  let formulePoundToKilo = parseFloat(numberInput.value * poundToKilo).toFixed(3);
  let formuleCelsiusToFahrenheit = parseFloat((numberInput.value * 1.8) + 32).toFixed(2);
  let formuleFahrenheitToCelsius = parseFloat((numberInput.value - 32) * 0.555).toFixed(2);
  if (numberInput.value == 1) {
    lengthConvert.innerHTML = `${numberInput.value} meter = ${formuleMeterToFeet} foot | ${numberInput.value} feet = ${formuleFeetToMeter} meter`;
    volumeConvert.innerHTML = `${numberInput.value} liter = ${formuleliterToGallon} gallon | ${numberInput.value} gallon = ${formuleGallonToLiter} liters`;
    massConvert.innerHTML = `${numberInput.value} kilo = ${formuleKiloToPound} pounds | ${numberInput.value} pound = ${formulePoundToKilo} kilo`;
    temperatureConvert.innerHTML = `${numberInput.value} celsius = ${formuleCelsiusToFahrenheit} fahrenheit | ${numberInput.value} fahrenheit = ${formuleFahrenheitToCelsius} celsius`;
  } else {
    lengthConvert.innerHTML = `${numberInput.value} meters = ${formuleMeterToFeet} feet | ${numberInput.value} feet = ${formuleFeetToMeter} meters`;
    volumeConvert.innerHTML = `${numberInput.value} liters = ${formuleliterToGallon} gallons | ${numberInput.value} gallons = ${formuleGallonToLiter} liters`;
    massConvert.innerHTML = `${numberInput.value} kilos = ${formuleKiloToPound} pounds | ${numberInput.value} pounds = ${formulePoundToKilo} kilos`;
    temperatureConvert.innerHTML = `${numberInput.value} celsius = ${formuleCelsiusToFahrenheit} fahrenheit | ${numberInput.value} fahrenheit = ${formuleFahrenheitToCelsius} celsius`;
    }
})
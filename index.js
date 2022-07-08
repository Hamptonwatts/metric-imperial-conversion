/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert")
let input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convert.addEventListener("click", function conversion() {
    let feet = input.value*3.281
    let meter = input.value/3.28
        length.textContent = `${input.value} meters = ${feet.toFixed(2)} feet | ${input.value} feet = ${meter.toFixed(2)} meters`
    let gallons = input.value*0.264
    let liters = input.value/0.264
        volume.textContent = `${input.value} liters = ${gallons.toFixed(2)} gallons | ${input.value} gallon = ${liters.toFixed(2)} liters`
    let pounds = input.value*2.204
    let kilograms = input.value/2.204
        mass.textContent = `${input.value} kilograms = ${pounds.toFixed(2)} pounds | ${input.value} pounds = ${kilograms.toFixed(2)} kilograms`
    
})


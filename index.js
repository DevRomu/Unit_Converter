/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Coding Field
let convertBtn = document.getElementById('convertBtn')
let inputEl = document.getElementById('input-el')
let lengthEl = document.getElementById('length-el')
let volumeEl = document.getElementById('volume-el')
let massEl = document.getElementById('Mass-el')

const LiterCal = 0.264 // gallon
const KiloCal = 2.204 // pound
const meterCal = 3.281 // feet


// Event listener that listens if the conver button is clicked. 
convertBtn.addEventListener("click", function(){

    let inputValue = inputEl.value
    
    const feetCal = (inputValue * meterCal)
    const gallonCal = ((inputValue * LiterCal) / LiterCal)
    const kiloCal = (inputValue * KiloCal)
    
    Feetanswer = inputValue * meterCal
    Meteranswer = feetCal / meterCal
    Poundanswer = inputValue * KiloCal
    Gallonanswer = gallonCal
    Literanswer = inputValue * LiterCal
    Kiloanswer = kiloCal / KiloCal
    

    
    lengthEl.textContent = `${inputValue} meter = ${Feetanswer.toFixed(2)} feet | ${Feetanswer.toFixed(2)} feet = ${Meteranswer.toFixed(2)} meter ` 
    
    massEl.textContent = `${inputValue} kilo = ${Poundanswer.toFixed(2)} pound | ${Poundanswer.toFixed(2)} pound = ${Kiloanswer.toFixed(2)} kilo `
    
    volumeEl.textContent = `${inputValue} liter = ${Literanswer.toFixed(2)} gallon | ${Literanswer.toFixed(2)} gallon = ${Gallonanswer.toFixed(2)} liter `    
})

  // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.


const snowman = document.getElementById("snowman")
const btn = document.getElementById("btn")
const resetEl = document.getElementById('reset')
let qSnowman = document.getElementById("q-snowman")
let qDrinks = document.getElementById("q-drinks")
let qTacos = document.getElementById("q-tacos")

const audio = new Audio('audio/jingle.mp3')
document.getElementById('play-jingle').addEventListener('click', function() {
    audio.volume = .4
    audio.play()
})

// Variables for storing number of item
let snowmanNum = snowman.textContent.length
let drinksNum = snowman.textContent.length
let tacosNum = snowman.textContent.length

// reload the window when the reset button is clicked
resetEl.addEventListener('click', function() {
    window.location.reload();
})

// Display the reset button after a total of 30
function resetWindow() {
    let totalNum = snowmanNum + drinksNum + tacosNum - 2
    if (totalNum === 33) {
        resetEl.style.display = 'block'
    }
    
}

// Calculate number of items and print to p tag
// - 1 and -2 for taking away existing characters
function numOfSnowman() {
    qSnowman.textContent = `${(snowmanNum + snowmanNum) / 2 - 1}` 
}
function numOfDrinks() {
    qDrinks.textContent = `${(drinksNum + drinksNum) / 2 - 2}` 
}
function numOfTacos() {
    qTacos.textContent = `${(tacosNum + tacosNum) / 2 - 2}` 
}

// Print out drink to hangout zone, increment counter, show disable button
document.getElementById('drink-btn').addEventListener('click', function() {
    if (drinksNum <= 11) {
        snowman.textContent += '☕'
        drinksNum++
        numOfDrinks()
    } else {
        this.style.background = 'red'
        this.textContent = 'X'
        resetWindow()
        
    }
    
})
// Print out taco to hangout zone, increment counter, show disable button
document.getElementById('taco-btn').addEventListener('click', function() {
    if (tacosNum <= 11) {
        snowman.textContent += '🌮'
        tacosNum++
        numOfTacos()
    } else {
        this.style.background = 'red'
        this.textContent = 'X'
        resetWindow()
    }
  
})

// print out snowman to hangout zone, increment counter, show disable button
btn.addEventListener("click", duplicateSnowman)

function duplicateSnowman(){ 
    if (snowmanNum <= 10) {
  snowman.textContent += '⛄ '
  snowmanNum++
  numOfSnowman()
} else {
    btn.style.background = 'red'
    btn.textContent = 'X'
    resetWindow()
}
}

numOfSnowman()




// Functions are reusable code. JavaScript written without functions executes one line of code at a time until complete.

let firstName = "Jamal";
let lastName = "Haynes";
// console.log(`${firstName} ${lastName}`);

function displayName (firstName, lastName) {
  // console.log(`${firstName} ${lastName}`)
}

displayName("Jamal", "Haynes")
displayName("Debra", "Gordon")
displayName("Svetlana", "Irinov")
displayName("Sequina", "Rodriguez")
displayName("Jessawynne", "Parker")


// A pure function is one that is consistent and has no effect on anything else in your system.
// That function will return the exact same value, given the same inputs every time.
const bugSquasher = function (bug, squasher) {
  return `The ${bug} was squashed by a ${squasher}`
}

bugSquasher("Beetle", "Boot")
bugSquasher("Spider", "thing next to my hand when I saw it")


// Impure functions produce different results upon execution.
const noise = function () {
  return Math.random()
}


// or affect other parts of the system when executed.
const updateDOM = function (message) {
    const el = document.getElementById("messages")
    el.innerHTML += message
}
const core = require("@actions/core")

const first_greeting = core.getInput("first-greeting")
const second_greeting = core.getInput("second-greeting")
const third_greeting = core.getInput("third-greeting")

console.log(`Hello ${first_greeting}, how are you doing!`)
console.log(`Hello ${second_greeting}, how are you doing, was just greeting ${first_greeting}!`)
if(third_greeting){
  console.log(`Hello ${third_greeting}, how are you doing, I just greeted ${first_greeting} and ${second_greeting}!`)
}
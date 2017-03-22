"use strict";

/**
Map examples
*/
let inputArray = [1, 2, 3, 4, 5]
function evenOrOdd(inputArray) {
  return inputArray.map(number => number % 2 ? "Odd" : "Even")
}
console.log(evenOrOdd(inputArray))

let dogBreeds = [{beagle : 'josie'}, {aussie : 'Ellie'}, {beagle: "Chester"}]
function pluck(dogBreeds, breed) {
  return dogBreeds.filter(dog => dog[breed]).map( dog => dog[breed])
}
console.log(pluck(dogBreeds, "beagle"))

/**
Filter examples
*/
let foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox']
function slowFoxes(foxTypes) {
  return foxTypes.filter(fox => fox != "Swift Fox")
}
console.log(slowFoxes(foxTypes))

let people = [{ firstName : 'John', lastName : 'Smith', age : 32}, {firstName:"Zach", lastName : "Quinn", age:16}]
function adults(people) {
  return people.filter(person => person.age >= 18)
}
console.log(adults(people))

/**
Reduce Examples
string1 is the carryover, string2 is the next element
*/
let strings = ["a","b","c","d"]
function join(strings, delimiter) {
  return strings.reduce( (string1, string2) => string1 + (delimiter ? delimiter : " ") + string2, "" )
}
console.log(join(strings, "!"))

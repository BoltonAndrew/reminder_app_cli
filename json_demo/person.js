/*jshint esversion:8*/
const fs = require('fs');
const person = {
    name: "Andy",
    age: 23,
    favColour: "red",
};

const personJson = JSON.stringify(person);

console.log(person);
console.log(personJson);

fs.writeFileSync("json_demo/person.json", personJson);
const dataBuffer = fs.readFileSync("json_demo/person.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data);
/*jshint esversion:8*/
const yargs = require('yargs');
const { addNote } = require('../utils/notes');

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
} else if (command == "remove") {
    console.log("removing a note");
} else if (command == "list") {
    console.log("making a list");
} else {
    console.log("command not recognised");
}



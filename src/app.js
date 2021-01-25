/*jshint esversion:8*/
const yargs = require('yargs');
const { addNote, listNotes, removeNote } = require('../utils/notes');

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
} else if (command == "remove") {
    console.log("removing a note");
    removeNote(yargs.argv.note);
} else if (command == "list") {
    console.log("showing the note list");
    listNotes();
} else {
    console.log("command not recognised");
}
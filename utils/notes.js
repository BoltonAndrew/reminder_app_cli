/*jshint esversion:8*/
const fs = require("fs");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];
    }
};

const addNote = myNote => {
    const allNotes = loadNotes();
    allNotes.push({reminder: myNote});
    saveNotes(allNotes);
};

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};

module.exports = {
    addNote
};
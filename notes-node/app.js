console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes.js');

var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Saved Successfully!');
    notes.printNote(note);
  } else {
    console.log(`Note with title "${argv.title}" already exists.`);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.printNote(note);
  } else {
    console.log(`Note with title "${argv.title}" not found.`);
  }
} else if (command === 'remove') {
  console.log(notes.removeNote(argv.title) ? `Note "${argv.title}" removed.` : `Note "${argv.title}" not found.`);
} else {
  console.log('Command not recognized');
}

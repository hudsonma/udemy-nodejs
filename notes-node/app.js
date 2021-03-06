const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of the note to add',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note to add',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv;

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
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.printNote(note));
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

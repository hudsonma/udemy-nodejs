const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = getAll();
  var newNote = {
    title,
    body
  }

  //Use filter to loop over array and identify existing titles that match new title
  var duplicateNotes = notes.filter((note) => note.title === title);

  //Length greater than zero indicates that an existing note already has the same title, so don't add the new one
  if(duplicateNotes.length === 0) {
    notes.push(newNote);
    saveNotes(notes);
    return newNote;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var matchingNotes = notes.filter((note) => note.title === title);
  return matchingNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !==  title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var printNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  printNote
}

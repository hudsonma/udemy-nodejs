// var obj = {
//   name: 'Mark'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name":"Mark", "age":25}';
// var personObj = JSON.parse(personString);
//
// console.log(personObj);
// console.log(personObj.name);

const fs = require('fs');
var originalNote = {
  title: 'title text',
  body: 'body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

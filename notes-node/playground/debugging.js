var person = {
  name: 'Mark'
};

person.age = 36;

debugger;
person.name = 'Mike';

console.log(person);


//Inspect built in debugger
//node --inspect <app name>
//must use debugger;

//Inspect with remote debugger (ie Chrome Dev Tools)
// node --inspect-brk <app name>
//chrome://inspect
//can use debugger; or chrome break points

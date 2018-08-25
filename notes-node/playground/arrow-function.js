var square = x => x*x;
console.log(square(3));

var user = {
  name: 'Mark',
  sayHi: () => {
    //this does not get bound in arrow functions
    console.log(arguments);
    console.log(`Hi ${this.name}!`)
  },
  sayHiAlt () {
    //alternate syntax that does allow this to get bound
    console.log(arguments);
    console.log(`Hi ${this.name}!`)
  }
}

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);


//////////////////PROBLEM 1////////////////////
/*
  Create an object called 'me' that has the following keys: 
    firstName, state, age, and greeter. 
  The value of the firstName key should be your name as a string. 
  The value of the property state should be your current state or providence of
  residence as a string. 
  The value of age should be your age as a number. 
  
  Last, greeter should be a method that returns the string 
  'Hello! My name is NAMEVALUE and I live in STATEVALUE' 
  with the corresponding values.
  For example: 'Hello! My name is Rubber Duck and I live in Utah"
*/

const me = {
  firstName: "Matthew",
  state: "Utah",
  age: 22,
  greeter: function() {
    return `Hello! My name is ${this.firstName} and I live in ${this.state}`
  }
};
  let firstName = "Matthew"
  let state = "Utah"
  console.log(me.greeter())

//////////////////PROBLEM 2////////////////////
/*
  Write a function called carFactory that takes in three parameters: a make, model, and year.  
  When the function is invoked:
    - a string will be sent in for make
    - a string will be sent in for model
    - a number will be sent in for year
  Inside the function, create an object from those parameters.
  Next, write an if statement that will check if the year sent in is greater than 2018.
    - if the year is greater than 2018, add a key to the object called isNew and set it to true
    - else, add a key to the object called isNew and set it to false
      - hint: you can use dot notation or bracket notation
  Last, the function should return the object
  For example,
    carFactory('toyota', 'camry', 2020)
  should return an object that looks like this:
  {
    make: 'toyota', 
    model: 'camry',
    year: 2020,
    isNew: true
  }
*/

//CODE HERE

const carFactory = (make, model, year) => {
  let car = {
    make: make,
    model: model,
    year: year
  };

  if (car.year > 2018) {
  car.isNew = true;
} else {
  car["isNew"] = false;
}

  return car;
};

console.log(carFactory("Audi", "R8", 2021));

function carFactory(make, model, year){
  let car = {};
  if(make){
    car.make = make
  }
  if (model) {
    car.model = model
  }
  if (year) {
    car.year = year
  }
  if(car.year > 2018) {
    car.isNew = true;
  } else {
    car.isNew = false;
  }
  return car
}
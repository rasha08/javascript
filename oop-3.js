'use strict';

function Person (firstName, lastName, gender) {
  this.setFirstName(firstName);
  this.setLastName(lastName);

  if (Person.isGenderValid(gender)) {
    this.setGender(gender);
  } else {
    console.error('Invalid Gender');
  }
}

// staticko svojstvo validGenders
Person.validGenders = ['M', 'F'];

// staticki metod isGenderValid
Person.isGenderValid = function (gender) {
  if (this.validGenders.indexOf(gender) !== -1) {
    return true;
  }

  return false;
};

Person.prototype.getFirstName = function () {
  return this.firstName;
};

Person.prototype.setFirstName = function (name) {
  this.firstName = name;
};

Person.prototype.getLastName = function () {
  return this.lastName;
};

Person.prototype.setLastName = function (lastName) {
  this.lastName = lastName;
};

Person.prototype.getGender = function () {
  return this.gender;
};

Person.prototype.setGender = function (gender) {
  this.gender = gender;
};

Person.prototype.getPersonInfo = function () {
  return `name: ${this.getFirstName()}, last name: ${this.getLastName()}, gender: ${this.getGender()}`;
};

var personObjectInstance = new Person('Ime 3', 'Prezime 3', 'r');
// loguje: Inavalid Gender

var personObjectInstance = new Person('Ime 3', 'Prezime 3', 'M');
console.log(personObjectInstance);
// Person { firstName: 'Ime 3', lastName: 'Prezime 3', gender: 'M' }

console.log(personObjectInstance.isGenderValid);
// loguje: undefined
// sto znaci da samo klasa ima pristup tom metodu dok njene instance ne, odnosno metod se zadrzava na klasi (static method)

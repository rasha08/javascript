'use strict';

// Kreirana klasa Person i implementirano prototipsko nasledje

function Person (firstName, lastName, gender) {
  this.setFirstName(firstName);
  this.setLastName(lastName);
  this.setGender(gender);
}

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

var personObjectInstance = new Person('Ime 2', 'Prezime 2', 'F');

console.log(personObjectInstance);
// Person { firstName: 'Ime 2', lastName: 'Prezime 2', gender: 'F' }

for (let prop in personObjectInstance) {
  if (personObjectInstance.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
// firstName
// lastName
// gender
// Sto znaci da se samo ova tri svojstva nalaze zapravo na personObjectInstance svi ostali metodi
// se nalaze nalaze na Person.prototype na koji pokazuje svojstvo __proto__ objekta personObjectInstance

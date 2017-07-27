'use strict';

// Kreirana klasa Person (funkcije konstruktora)

function Person (firstName, lastName, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
}

// Napravljena instanca klase Person preko new kljucne reci

var personObjectInstance = new Person('Ime', 'Prezime', 'M');

console.log(personObjectInstance);
// Person { firstName: 'Ime', lastName: 'Prezime', gender: 'M' }

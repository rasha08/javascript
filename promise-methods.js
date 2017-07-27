
'use strict';

// PROMISE 1
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('success promise 1');
    } else {
      reject('fail promise 1');
    }
  }, 5000);
});

// PROMISE 2
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('success promise 2');
    } else {
      reject('fail promise 2');
    }
  }, 1500);
});

// PROMISE 3
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (false) {
      resolve('promise 3 success');
    } else {
      reject('promise 3 fail');
    }
  }, 2500);
});

// PROMISE 4
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('promise 4 success');
    } else {
      reject('promise 4 fail');
    }
  }, 3500);
});

Promise.race([promise1, promise2, promise3, promise4])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
// race metod uzima niz pormises-a i varaca onaj promise koji prvi vrati bilo kao resolve ili reject

Promise.all([promise1, promise2, promise3, promise4])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
// all metod nam ukoliko svi Promise koji su prosledjeni u nizu resolve-uju vraca niz vrednosti sa istim redosledom
// po kom su prosedjeni Promises-i u prilikom pozivanja metoda
// ukoliko bilo koji od metoda rejectuje all metod nam varaca rezultat reject funkcije tog Promise-a

Promise.reject('neki razlog')
  .catch(function (error) {
    console.error(error);
  });
// metod reject nam vraca Pomise object koji je reject-ova a kao error salje razlog koji mu se prosledjuje kao parametar

Promise.resolve('success')
  .then(function (data) {
    console.log(data);
  });
// metod reject nam vraca Promise object koji je resolve-ovao sa vrednoscu koji prosledjujemo kao parametar

'use strict';

// PROMISE 1
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('sucess');
    } else {
      reject('fail');
    }
  }, 1000);
});

promise1
  .then(function (data) {
    var newData = `Changed ${data}`;
    console.log(`first then has data: ${data}`);

    return newData;
  })
  .then(function (data) {
    console.log(`Second then has fired data is: ${data}`);
  })
  .catch(function (error) {
    console.error(`Promise has not succided`);
  });

// Promise 1 nema greske tako da se pozivaju samo callback-ovi u .then metodima;
// prvi .then metod dobija podatke iz preko resolve funkcije
// ukoliko ovaj metod ne vrati neke podatke sledeci .then metod ce kao parametar data dobiti undefined
// posto callback u prvom .then metodu menja vrednost podataka onda drugi .then metod dobija promenjene podatke

// PROMISE 2
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('sucess');
    } else {
      reject('fail');
    }
  }, 1500);
});

promise2
  .then(function (data) {
    throw (new Error());
    var newData = `Changed ${data}`;
    console.log(`first then has data: ${data}`);

    return newData;
  })
  .then(function (data) {
    console.log(`Second then has fired data is: ${data}`);
  })
  .catch(function (error) {
    console.error(`Promise has not succided`);
  });
  // Posto u prvom .then metodu "bacamo" error drugi .then metod se preskace odnosno error putuje do najblizeg catch-a

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

promise3
  .then(function (data) {
    var newData = 'new data';

    return newData;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
  // posto se uslov u setTimeout funkciji false biva pozvan reject callback i greska putuje do najblizeg catch-a
  // sto znaci da se preskacu oba .then metoda

// PROMISE 4
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (false) {
      resolve('promise 4 success');
    } else {
      reject('promise 4 fail');
    }
  }, 3500);
});

promise4
  .then(function (data) {
    var newData = 'new data';

    return newData;
  })
  .catch(function (error) {
    console.error(error);
    return 'data from catch';
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
  // posto se uslov u setTimeout funkciji false biva pozvan reject callback i greska putuje do najblizeg catch-a
  // Ali u ovom slucaju imamo .then meton nakon catch-a koji "havata" gresku i vraca vrednost
  // .then biva pozvan i dobija vrednost iz predhodnog catch-a.

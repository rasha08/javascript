'use strict';

(function () {
  console.log(foo);
  // undefined - promenjiva foo je u scope-u (kreirana i inicijalizovana) ali joj jos nije dodeljena vrednost

  var foo = 'some value';

  function bar () {
    console.log(foo);

    var foo;
  }

  bar();
  // undefined - promenljiva foo je u function scope-u funkcije bar i zato ne pristupa promenljivoj iznad

  function baz () {
    var foo = 'foo from baz';

    return function () {
      console.log(foo);
    };
  }

  var some = baz();

  some();
  // "foo from baz" - promenjiva foo iz funkcije baz se zadrzava u scope-u funkcije i ako je pozvana van svoje leksicke sredine

  function someOtherFunction (foo) {
    console.log(foo);
  }

  someOtherFunction();
  // undefined - zato sto parametar foo se smesta u scope funkcije i zato funkcija ne moze da pristupi promenjivoj foo iz
  // spoljasnje sredine

  function someFunction () {
    console.log(foo);
  }

  someFunction();
  // "some value" - posto foo ne postoji u scope-u funkcije, funkicija trazi foo u sledecem "nivou" svoje leksicke sredine

  function someLetFunction () {
    var foo = 'foo declared with var';

    {
      let foo = 'let foo 1';
      console.log(foo);
    }

    {
      let foo = 'let foo 2';
      console.log(foo);
    }

    console.log(foo);
  }

  someLetFunction();
  // let foo 1 - promenjiva foo je u block scope-u sto znaci da nema "dodira" sa sa foo promenjivom proglasenom sa var
  //             zato sto promenjive pripadaju razlicitim scope-ovima
  // let foo 2 - promenjiva foo iz drugog bloka je potpuno nova promanjiva vezana za scope drugog bloka
  // foo declared with var - promenjiva iz function scopa

  function someOtherLetFunction () {
    // console.log(foo);
    let foo = 'I m gona be an TDZ error';
  }

  someOtherLetFunction();
  // TDZ error (temporal dead zone) - za razliku od var promenjivih let promenjive se u fazi kompilacije kreiraju
  // ali se ne inicijaliziraju ih je nemoguce pozvati pre njihove deklaracije

  function someConstFunction () {
    const foo = 'first constant';

    {
      const foo = 'second constant';
      console.log(foo);
    }

    {
      const foo = 'third constant';
      console.log(foo);
    }

    console.log(foo);
  }

  someConstFunction();
  // 'second constant'
  // 'third constant'
  // 'first constant'
  // SCOPE za promenjeve deklarisana sa const je implementiran kao block scope

  function someOtherConstFunction () {
    const foo = 5;
    // foo = 4;
  }

  someOtherConstFunction();
  // Type Error - nije dozoljeno dodeljivanje nove vrednost promenjivoj koja je deklarisana sa const

  function someThirdConstFunction () {
    const foo = [5, 6, 7];
    foo[1] = 'changed';
    console.log(foo);
  }

  someThirdConstFunction();
  // [5, 'changed', 7] -Kada definisemo promenjive sa const onda zapravo pravimo inmutable binding sto znaci da kod vrednosti
  // koje se 'salju' po refereci ne mozemo menjati referencu ali mozemo menjati vrednosti unutar njih.
})();

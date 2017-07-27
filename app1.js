'use strict';

var foo = 'Foo from app1.js';

(function () {
  var foo = 'foo from anonimus';
  console.log(foo);
})();

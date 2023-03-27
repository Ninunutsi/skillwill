// const isNumber = require('is-number');

// console.log(isNumber(9))
// console.log(isNumber('9'))

var validator = require('validator');

console.log(validator.isEmail('test@test.com'))
console.log(validator.isEmail('abcDE123'))



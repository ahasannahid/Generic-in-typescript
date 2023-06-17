"use strict";
// const a : newType = 'address'
// const b : newTypeusingKeyOf = 'age'
// ({name: 'Mr.X', age: 100}, 'name')  //Mr. X
// ({name: 'Mr.X', age: 100}, 'age')  //100
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'Mr.X', age: 100 }, 'age');
// bracket notation
// const a = {
//     name: 'Mr.X',
//     age: 100
// }
// a['name']
// a['age']

// type PersonType = {
//     name : string,
//     age : number,
//     address : string
// };

// type newType = 'name' | 'age' | 'address'    //Manually kora hoise ekhane (union)

// // keyOf operator
// type newTypeusingKeyOf = keyof PersonType;

// // const a : newType = 'address'
// // const b : newTypeusingKeyOf = 'age'

// // ({name: 'Mr.X', age: 100}, 'name')  //Mr. X
// // ({name: 'Mr.X', age: 100}, 'age')  //100

// function getProperty<X , Y extends keyof X>(obj:X, key: Y){
//     obj[key]
// }

// const property = getProperty({name: 'Mr.X', age:100}, 'age')


// // bracket notation
// // const a = {
// //     name: 'Mr.X',
// //     age: 100
// // }
// // a['name']
// // a['age']

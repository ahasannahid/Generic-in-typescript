// // generic type ke force kora

// // const newData = {...myInfo, crush}
// // const addMeInMyCrushMine=<T extends {name: string, age: number, salary: number}>(myInfo:T)=> {
// //     const crush = 'Kate';
// //     const newData = {...myInfo, crush}
// //     return  newData;
// // }

// // extends with type
// type MandatoryTypes = {name: string, age: number, salary: number};
// // const addMeInMyCrushMine=<T extends MandatoryTypes>(myInfo:T)=> {
// //     const crush = 'Kate';
// //     const newData = {...myInfo, crush}
// //     return  newData;
// // }

// // extends with interface
// interface MandatoryInterface{name: string, age: number, salary: number};

// const addMeInMyCrushMine=<T extends MandatoryInterface>(myInfo:T)=> {
//     const crush = 'Kate';
//     const newData = {...myInfo, crush}
//     return  newData;
// }

// type MyInfoType={
//     name : string,
//     age : number,
//     salary : number,
//     other1 : boolean,
//     other2 : null
// }
// const myInfo:MyInfoType = {
//     name: 'Nahid',
//     age: 25,
//     salary: 500000,
//     other1 : false,
//     other2 : null
// }
// const result12 = addMeInMyCrushMine<MyInfoType>(myInfo)

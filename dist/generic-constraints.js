"use strict";
// generic type ke force kora
;
const addMeInMyCrushMine = (myInfo) => {
    const crush = 'Kate';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: 'Nahid',
    age: 25,
    salary: 500000,
    other1: false,
    other2: null
};
const result12 = addMeInMyCrushMine(myInfo);

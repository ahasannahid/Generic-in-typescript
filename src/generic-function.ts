// arrow function
const createArray=(param:string):string[]=>{
    return [param];
}

// generic arrow function(single parameter T)

const createArray1=<T>(param:T):T[]=>{
    return [param];
}

// generic arrow function(double parameter or touple)
const createArray2=<X, Y>(param1:X, param2:Y):[X, Y]=>{
    return [param1, param2];
}

const result1 = createArray('Banglaesh')
const result2 = createArray1<string>('true')
const result3 = createArray1<boolean>(true)
const result4 = createArray1<object>({name:'Nahid'}) //not recommended
const result5 = createArray1<{name:string}>({name:'Nahid'})

// use type
type Name = {name:string}
const result6 = createArray1<Name>({name:'Nahid'})

// use interface
interface IName{
    name:string
}
const result7 = createArray1<IName>({name:'Nahid'})

// Touple

const result8 = createArray2<string, string>('Bangladesh', 'I love BD')

const result9 = createArray2<boolean, string[]>(true, ['USA'])
const result10 = createArray2<boolean, Array<string>>(true, ['USA'])

const result11 = createArray2<Name, boolean>({name: 'BD'}, false)


// spread operator
// const crush = 'Kate'
// const myInfo = {
//     name: 'Nahid',
//     age: 25,
//     salary: 500000
// }
// const newData = {...myInfo, crush}

const addMeInMyCrushMine=<T>(myInfo:T)=> {
    const crush = 'Kate';
    const newData = {...myInfo, crush}
    return  newData;
}
const myInfo = {
    name: 'Nahid',
    age: 25,
    salary: 500000
}
const result12 = addMeInMyCrushMine(myInfo)


// generic in normal function

function createArray5<X, Y>(param1:X, param2:Y ):[X, Y]{
    return [param1, param2];
}
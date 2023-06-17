// import {add as addTwo, substract, multiply} from './module'

// wildcard import
// import * as Methods from './module'

// default import (e somoy jekono nam e import kora jay)
// import avg from './module';


// import addtwo from './utilities/add';
// import multiply from './utilities/multiply';
// import avg from './utilities/avg';

import method from './utilities/index'


const add = (param1:number, param2:number, param3:number):number => {
    return param1 + param2 + param3;
}

// wildcard import function uses syntex
// const res = Methods.add(4,6)

//  default import function uses syntex

// const res1 = addtwo(5,5)
// const res2 = multiply(5,5)
// const res3 = avg(5,5)
const res1 = method.addtwo(5,5)
const res2 = method.multiply(5,5)
const res3 = method.avg(5,5)
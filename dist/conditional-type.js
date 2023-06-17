"use strict";
// // when a type is dependent on another type is called conditional type.
// type a1 = number;
// type a3 = undefined;
// type a4 = number;
// // conditional typing
// type a2 = a1 extends string ? string : null;
// // nested conditional typing
// type c = a1 extends null ? null : a3 extends number ? number : any
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;
// // examplae of conditional type
// type Sheikh = {
//     wife1 : string;
//     wife2 : string;
// }
// // check korbe ei sheikh type e wife 1 ache kina. thakle true reture=n korbe otherwise false
// // type CheckProperty<T> = T extends {wife1:string} ? true : false;  //normal hardcoded
//                            //wife1 extends 'wife1' | 'wife2' 
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false; //generic
// // type CheckWife1 = CheckProperty<Sheikh> //normal hardcoded
// type CheckWife1 = CheckProperty<Sheikh, 'wife1'>  //generic
// // another example of conditional typing(complex)
// type Bandhubi = 'Monika' | 'Rachel' | 'pheobe'
// // hardcoded
// // type RemoveBanfhubi<T> = T extends 'Rachel' ? never : T
// // type CurrentBandhubi = RemoveBanfhubi<Bandhubi>;
// //dynamic or generic
// type RemoveBanfhubi<T , K> = T extends K ? never : T
// type CurrentBandhubi = RemoveBanfhubi<Bandhubi, 'Monika'>;
// // union theke kono value er type never hoye gele sei value ta union theke remove hoye jabe.

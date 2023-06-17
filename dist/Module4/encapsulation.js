"use strict";
// /**
//  * access modifier , getter setter. hide kora. unaccessable kore rakha
//  * method keu encapsulate kora jay(private diye)
//  */
// class BankAccount{
//     readonly id : number;
//     name : string;
//     private _balance : number;
//     constructor(id : number, name: string, balance : number,){
//         this.id = id
//         this.name = name
//         this._balance = balance
//     }
//     private getTestBalance():number{
//         return this._balance
//     }
//     get Test():number{
//         return this.getTestBalance()
//     }
//     // getter
//     get balance():number{
//        return this._balance
//     }
//     // setter
//     set deposite(amount:number){
//         this._balance = this.balance + amount
//     }
//     getBalance():number{
//         // console.log(`My Current Balance is ${this._balance}`)
//         return this._balance
//     }
//     // addDeposite(amount:number){
//     //     this._balance = this._balance + amount;
//     //     console.log(`My Current Balance is ${this._balance}`)
//     // }
// }
// class StudentAccount extends BankAccount{
//     test(){
//         this.Test
//     }
// }
// const myAccount =new BankAccount (444, 'Nahid', 200);
// // console.log(myAccount)
// // myAccount.getBalance();
// // myAccount.addDeposite(20);
// console.log(myAccount.balance);
// myAccount.deposite=20;
// console.log(myAccount.balance)

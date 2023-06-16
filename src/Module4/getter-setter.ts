/**
 * private property ke access korar jonne getter use kora hoy.
 * getter method er jonne get keyword use hoy.
 * setter method er jonne set keyword use hoy.
 * 
 */

class BankAccount{
    readonly id : number;
    name : string;
    private _balance : number;
  
    constructor(id : number, name: string, balance : number,){
        this.id = id
        this.name = name
        this._balance = balance
    }
    // getter
    get balance():number{
       return this._balance
    }
    getBalance():number{
        // console.log(`My Current Balance is ${this._balance}`)
        return this._balance
    }
    addDeposite(amount:number){
        this._balance = this._balance + amount;
        console.log(`My Current Balance is ${this._balance}`)
    }
}

class StudentAccount extends BankAccount{
    test(){
        
    }
}



const myAccount =new BankAccount (444, 'Nahid', 20);
// console.log(myAccount)
// myAccount.getBalance();
// myAccount.addDeposite(20);
console.log(myAccount.id);
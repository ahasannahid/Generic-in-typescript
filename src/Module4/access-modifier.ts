/** different types of modifier we have(readonly, public, private, protected)
 * difference between private and protected modifier
 * private sudu oi class er vitor accessable
 * protected onno class eu accessable
 * normally private and readonly use korbo. public by default thake. protected special case e use korbo.
 */

class BankAccount{
    readonly id : number;
    name : string;
    private _balance : number;
    protected mobile_number : number
  
    constructor(id : number, name: string, balance : number, mobile_number : number){
        this.id = id
        this.name = name
        this._balance = balance
        this.mobile_number = mobile_number
    }
    getBalance(){
        console.log(`My Current Balance is ${this._balance}`)
    }
    addDeposite(amount:number){
        this._balance = this._balance + amount
    }
}

class StudentAccount extends BankAccount{
    test(){
        
    }
}



const myAccount =new BankAccount (444, 'Nahid', 20, 1910613458);
// myAccount._balance = 0;
console.log(myAccount)
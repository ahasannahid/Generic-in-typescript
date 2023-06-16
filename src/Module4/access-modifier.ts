class BankAccount{
    id : number;
    name : string;
    private _balance : number
    // private property te underscore diye suru kora convention
    constructor(id : number, name: string, balance : number){
        this.id = id
        this.name = name
        this._balance = balance
    }
}

const myAccount =new BankAccount (444, 'Nahid', 20);
// myAccount._balance = 0;
console.log(myAccount)
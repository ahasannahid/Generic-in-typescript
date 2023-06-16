/**
 *static e this applicable na and static keyword use korte hobe. ekhetre constructor er proyojon neo. and instance create er somoy kono arguments pass korte hoyna. value class ei property decalere er somoy diye deua hoy. value accesser somoy class er property hisebe access korte hoy. method keu static kore deua deua jay. method ke static korle instance hisebe access kora jayna. instance create er dorkar porbena. direct class diye access kora jabe.
 */
class Counter{
   static counter : number = 0;
    
   static increment():number{
     return Counter.counter =  Counter.counter + 1
    }
   static decrement():number{
     return Counter.counter =  Counter.counter - 1
    }
}

// const instance1 = new Counter ();
// const instance2 = new Counter ();

console.log(Counter.increment()); //value 0 theke 1 hoise
console.log(Counter.increment()); //value 1 theke 2 hoise

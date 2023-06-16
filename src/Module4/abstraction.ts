/**
 * class er mjy je method thakbe tar real implementation somporke janbo na, sudu shape ta kmn buja jabe.implementation er details thakbena sudu output thakbe.
 * abstraction duivabe kora jay. interface er maddhome. abstract class er maddhome
 */
// class eu interface use kora jay. interface e class e use korar jonne implements keywprd use korte hoy

// abstraction with interface

// interface IVehicle{
//     name : string;
//     model : string
// }

// const vehicle : IVehicle = {
//     name : 'Car',
//     model : '2000'
// }

// interface IVehicle{
//     startEngine():void;
//     stopEngine():void;
//     move():void;
// }

// class Vehicle implements IVehicle{
//     constructor(
//         public name : string,
//         public brand : string,
//         public model : string
//         ){}
//     startEngine(): void {
//         console.log('I am starting engine....');
//     }
//     stopEngine(): void {
//         console.log('I am stoping engine....');
//     }
//     move(): void {
//         console.log('I am for moving purpose....');
//     }
//     test(){
//         console.log('I am for testing purpose....');
//     }
// }

// const vehicle1 = new Vehicle('Car', 'toyota', '2000')

// abstraction with abstract class

// abstract class holo jokhn kono class ke onno class follow kore. or master class. erjonne class er age abstract keyword use korte hoy. abstract class er kono instance kora jayna.

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: string
    ) { }
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log('I am for moving purpose....');
    }
    test() {
        console.log('I am for testing purpose....');
    }
}

class car extends Vehicle {
   

// const car1 = new Vehicle('Car', 'honda', '2015');

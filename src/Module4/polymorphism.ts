// /**
//  * ***class ke type hisebe use kora jay
//  * onek gulo rup thakbe.
//  * onekgulo class er same method different different output dekhab
//  * super sobsomoy this er age use hoy.
//  */

// class Person{
//     takenap():void{
//         console.log('I am sleeping 8 hours per day')
//     }
// }

// class Student extends Person{
//     takenap():void{
//         console.log('I am sleeping 10 hours per day')
//     }
// }

// class Developer extends Person{
//     takenap():void{
//         console.log('I am sleeping 5 hours per day')
//     }
// }

// function getNap(param: Person){
//     param.takenap();
// }

// // instance
// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNap(person1);
// getNap(person2);
// getNap(person3);



// class Shaps{
//     getArea():number{
//         return 0;
//     }
// }
// // area --> pi *r *r
// class Circle extends Shaps{
//     radius: number;
//     constructor (radius:number){
//         super()
//         this.radius = radius
//     }
//     getArea():number{
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Rectangle extends Shaps{
//     height : number;
//     width : number;
//     constructor(height: number, width : number){
//         super()
//         this.height = height
//         this.width = width
//     }
//     getArea(): number {
//         return this.width * this.height
//     }  
// }

// function getAreaOfShape(param:Shaps){
//     console.log(param.getArea())
// }

// getAreaOfShape(new Circle(10))
// getAreaOfShape(new Rectangle(10, 12))



// Inheritence
// common class
class Parent{
    name: string;
    age: number;
    address: string
    constructor ( name: string, age: number, address: string){
        this.name = name
        this.age = age
        this.address = address
    }
    makeSleep(hours: number) :string {
        return `This ${this.name} will slepp for ${hours}`
    }
}
// Class using Inheritence(using common property and method with two class)
class Student extends Parent{
    constructor ( name: string, age: number, address: string){
        super(name, age, address)
    }
}

const student1 = new Student('Nahid', 24, 'Dhaka');

class Teacher extends Parent{
    designation: string //different property
    constructor ( name: string, age: number, address: string, designation: string){
        super(name, age, address)

        this.designation = designation  
    }
    takeclasses(numOfClass: number) : string{    //different class
        return `This ${this.name} will take ${numOfClass} class`;
    }
}

const teacher1 = new Teacher('Ahasan', 25, 'Dhaka', 'Programmer');


// // Normal class
// class Student{
//     name: string;
//     age: number;
//     address: string

//     constructor ( name: string, age: number, address: string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }

//     makeSleep(hours: number) :string {
//         return `This ${this.name} will slepp for ${hours}`
//     }
// }

// class Teacher{
//     name: string;
//     age: number;
//     address: string;
//     designation: string //different property

//     constructor ( name: string, age: number, address: string, designation: string){
//         this.name = name
//         this.age = age
//         this.address = address
//         this.designation = designation  
//     }

//     makeSleep(hours: number) :string {
//         return `This ${this.name} will slepp for ${hours}`;
//     }

//     takeclasses(numOfClass: number) : string{    //different class
//         return `This ${this.name} will take ${numOfClass} class`;
//     }
// }
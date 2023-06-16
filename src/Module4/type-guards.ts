// // key of guard(runtime e kaj kore)
// type AlphaNeumeric = number | string
// function add(param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric {
//     if (typeof param1 == 'number' && typeof param2 == 'number') {
//         return param1 + param2;
//     } else {
//         return param1.toString() + param2.toString();
//     }
// }
// add('1', '2');
// add(1, 2);

// // In Guard
// type NormalUserType = {
//     name: string;
// }
// type AdminUserType = {
//     name: string;
//     role: 'admin'
// }

// function getUser(user: NormalUserType | AdminUserType): string {
//     if ('role' in user) {
//         return `I am an admin and my role is ${user.role}`
//     } else {
//         return `I am a normal user`
//     }
// }
// const normalUser1: NormalUserType = { name: 'Nahid' }
// const adminUser1: AdminUserType = { name: 'Ahasan', role: 'admin' }
// console.log(getUser(adminUser1));
// console.log(getUser(normalUser1));

// //instaceof guard

// class Animal {
//     name: string;
//     species: string;

//     constructor(name: string, species: string) {
//         this.name = name
//         this.species = species
//     }
//     makeSound() {
//         console.log('I am making sound')
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeBark() {
//         console.log('I am barking')
//     }
// }

// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeMeaw(){
//         console.log('I am mewing');
//     }
// }

// // function isDog(animal:Animal): boolean{
// //     return animal instanceof Dog
// // }
// function isDog(animal:Animal): animal is Dog{
//     return animal instanceof Dog
// }

// function isCat(animal: Animal): animal is Cat{
//     return animal instanceof Cat
// }

// // class ke type hisebe use kora jay
// function getAnimal(animal:Animal){
//      if(isDog(animal)){
//         animal.makeBark();
//     }

    
//     else if(isCat(animal)){
//         animal.makeMeaw();
//     }
//     // if(animal instanceof Dog){
//     //     animal.makeBark();
//     // }
//     // else if(animal instanceof Cat){
//     //     animal.makeMeaw();
//     // }
//     else{
//         animal.makeSound();
//     }
// }
// const animal1 = new Dog('German Shephard', 'dog');  //instance of dog
// const animal2 = new Cat('Persian', 'cat');   //instance of cat
// getAnimal(animal1);
// getAnimal(animal2);

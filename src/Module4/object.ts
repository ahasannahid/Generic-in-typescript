// class declare er somoy constructor method ke call korte hobe must.

// class declare er somoy constructor method ke call korte hobe must.
// class Animal{
//     public name : string;
//     public species : string;
//     public sound : string;

//     
//     constructor(name: string, species: string, sound: string){
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }

//     // class er vitor function declare korle setake method bole.ekhane arrow function use korbo na .karon arrow function e this property applicable hoy na.
//     public makeSound(){
//         console.log(`The ${this.name} Says ${this.sound}`) //"German Shephard says geu geu"
//     }
// }


class Animal{
    // public name : string;
    // public species : string;
    // public sound : string;

    // parameter properties
    constructor(public name: string, public species: string, public sound: string){
        // this.name = name
        // this.species = species
        // this.sound = sound
    }

    // class er vitor function declare korle setake method bole.ekhane arrow function use korbo na .karon arrow function e this property applicable hoy na.
    public makeSound(){
        console.log(`The ${this.name} Says ${this.sound}`) //"German Shephard says geu geu"
    }
}

const dog = new Animal('German Shephard', 'dog', 'geu geu');
const cat = new Animal('persian', 'cat', 'meu meu')
dog.makeSound();
cat.makeSound();
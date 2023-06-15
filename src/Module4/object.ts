// class declare er somoy constructor method ke call korte hobe must.
class Animal{
    name : string;
    species : string;
    sound : string;

    constructor(name: string, species: string, sound: string){
        this.name = name
        this.species = species
        this.sound = sound
    }

    // class er vitor function declare korle setake method bole.ekhane arrow function use korbo na .karon arrow function e this property applicable hoy na.
    makeSound(){
        console.log(`The ${this.name} Says ${this.sound}`) //"German Shephard says geu geu"
    }
}
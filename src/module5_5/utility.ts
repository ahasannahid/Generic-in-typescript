// pick(kono interface er property and type jodi onno type e use korte hoy)
interface Person{
    name : string;
    email ?: string;
    ContactNo : string;
}
// Pick keyword duita parameter ney(kotha theke use kobo, 'konta use korbo')
type Email = Pick<Person, "email">
type Contact = Pick<Person, "ContactNo" | "email">
// Omit(kono interface theke kono property or type omit/bad hoye jabe)
// Omit keyword duita parameter ney(kotha theke fele dibo, 'konta fele dibo')
type Name = Omit<Person, "email" | "ContactNo">

// Partial and Required(jokhn kono property optional thake)
// to make al the properties be optional type we use partial
type Optional = Partial<Person>

// Required(reverse of Partial)
type RequiredProperties = Required<Person>



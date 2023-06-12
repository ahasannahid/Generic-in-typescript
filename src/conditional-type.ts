// when a type is dependent on another type is called conditional type.

type a1 = number;
type a3 = undefined;
type a4 = number;

// conditional typing
type a2 = a1 extends string ? string : null;

// nested conditional typing
type c = a1 extends null ? null : a3 extends number ? number : any
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;
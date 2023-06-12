// when a type is dependent on another type is called conditional type.

type a1 = string;
type a2 = a1 extends string ? string : null;

// ne
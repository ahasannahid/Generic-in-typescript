const arrayofNumbers = [1,2,3,4]   //convert kore string array korte cacchi ['1','2','3']

const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

type AreaNumber={
    height: number;
    width:number;
};

type AreaString = {
    height: string;
    width:string;
}

type AreaReadonly = {
    readonly height: number;
    readonly width:number;
};

const rectangularArea: AreaReadonly={
    height: 10,
    width: 12
}

rectangularArea.width=10;

type A = AreaNumber['height']  //lookup types
type B = keyof AreaNumber;  // 'width' | 'height' ekta union type toyari korbe

// const obj = {
//     name: 'Nahid'
// }
// obj['name'];
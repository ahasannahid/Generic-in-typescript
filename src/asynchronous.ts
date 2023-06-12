
// mocking
// string
const makePromise = (): Promise<string> => {
    return new Promise<string> ((resolve, reject) => {
        const data : string = 'Data is fetched'
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data');
        }
    });
};

// boolean
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean> ((resolve, reject) => {
        const data : boolean = true;
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data');
        }
    });
};

// object

type DataType = {
    data : string
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType> ((resolve, reject) => {
        const data : DataType = {data : 'Data is fetched'};
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data');
        }
    });
};

// Promise<string> Promise<boolean> Promise<object>

const result = makePromise()

// string
const getPromiseData = async (): Promise<string> => {
    const data = await makePromise()
    return data;
    console.log(data);
}

// boolean
const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data;
    console.log(data);
}


// object
const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject()
    return data;
    console.log(data);
}
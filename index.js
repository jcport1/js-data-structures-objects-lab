// Write your solution in this file!

const driver = {};

//nondestructively update driver 
function updateDriverWithKeyAndValue(driver, key, value) {

    //returns driver w/ original key value paris & new key value pari
    //does not modify the original driver, but rather returns a clone w/ the new data 
    return Object.assign({}, driver, { [key]: value});

}

//destructively update driver 
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;
    return driver;

}

//nondestructively delete driver by key 

function deleteFromDriverByKey(driver, key) {

    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj; 
}

function destructivelyDeleteFromDriverByKey(driver,key) {


    //modify object 
    delete driver[key];

    //return new object
    return driver; 
}
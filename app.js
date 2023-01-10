// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = (valueInDollar/1.2) * 127.9;
    return valueInYen;
}

const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro / 127.9;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / 127.9;

    let valueInPounds = valueInEuro * .8;
    //return the dollar value
    return valueInPounds;
}


const fromEuroToPound = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInEuro * .8;
    //return the dollar value
    return valueInPound;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen, fromYenToPound, fromDollarToYen}
const Math = {};

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b==0){
        console.log('No se puede dividir por cero');
    } else {
        return a/b;
    }
}

/* exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide; */
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
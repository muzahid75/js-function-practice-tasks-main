function checkNumber(num) {
    let result;
    if (num % 2 === 1) {
        console.log(num +" "+ "is odd number");
        result = num * 2;
    } else {
        console.log(num + "odd");
        result = num / 2;
    }
    return result;
}

console.log(checkNumber(5));
function count_zero(binaryString) {
    let count = 0;
    for (let char of binaryString) {
        if (char === '0') {
            count++;
        }
    }

    return count;
}

// Example usage
let binaryStr = "1010010100";
let zeroCount = count_zero(binaryStr);

console.log(`The number of 0's is: ${zeroCount}`);

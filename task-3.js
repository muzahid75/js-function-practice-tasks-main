function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / size;
}

// Example usage
let numbers = [10, 20, 30, 40, 50];
let size = 5;
let average = make_avg(numbers, size);

console.log(`The average is: ${average}`);

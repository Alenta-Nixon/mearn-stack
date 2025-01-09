const numbers = [3, 1, 7, 5, 9, 2, 8];

if (numbers.length === 0) {
    console.log("Array is empty");
} else {
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    console.log(`Smallest number: ${min}`);
    console.log(`Biggest number: ${max}`);
}


function findMultiplesOfThree(arr) {
    return arr.filter(num => num % 3 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplesOfThree = findMultiplesOfThree(numbers);
console.log(multiplesOfThree);
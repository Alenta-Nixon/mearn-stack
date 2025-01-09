let num = 153, sum = 0, temp = num;

for (let i = temp; i > 0; i = (i - (i % 10)) / 10) {
    sum += (i % 10) ** 3;
}
console.log(num, sum === num ? "is an Armstrong number" : "is not an Armstrong number");

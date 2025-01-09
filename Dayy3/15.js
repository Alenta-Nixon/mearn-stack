let maxThreeDigit = 0;

for (let i = 100; i <= 999; i++) {
    if (i > maxThreeDigit) {
        maxThreeDigit = i;
    }
}
console.log("Biggest three-digit number:", maxThreeDigit);

let binary = "1101", decimal = 0;

for (let i = 0; i < binary.length; i++) {
    decimal = decimal * 2 + (binary[i] - '0');
}
console.log("Decimal:", decimal);

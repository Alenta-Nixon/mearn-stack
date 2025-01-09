let n = 10;
let a = 0, b = 1, temp;

console.log("Fibonacci Series:");
for (let i = 0; i < n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
}

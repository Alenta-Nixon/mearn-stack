let char = 'A';
let lowerCaseChar = '';

for (let i = 0; i < 1; i++) {
    if (char >= 'A' && char <= 'Z') {
        lowerCaseChar = String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
        lowerCaseChar = char;
    }
}

console.log("Lowercase character:", lowerCaseChar);

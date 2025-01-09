let num = 121, rev = 0, temp = num;
for (; temp > 0; temp = (temp - (temp % 10)) / 10) rev = rev * 10 + temp % 10;
console.log(num, rev === num ? "is a palindrome" : "is not a palindrome");

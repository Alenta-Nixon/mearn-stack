var a=[1,2,3,4,5];
var b=["GOOD"];
var c=["morning"];
a.push(6);
a.push(7);
a.unshift(0);
a.pop(4);
var cc=a.concat(b,c);
console.log(cc);
console.log(a);
var d=a.slice(1,5); 
console.log(d);
var index=a.indexOf(3);
console.log(index);
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hassan"];
console.log(a);
i = a;
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
}
//push add an elementto the last
a.push("hassan");
console.log(a);
//pop to remove element to the last
a.pop("hassan");
console.log(a);
// shift and unshift
a.shift();
console.log(a);
//unshift
a.unshift("CFI");
console.log(a);
//array helpers refer by own
//slice and splice refer to class repository
//reverse
a = a.reverse();
console.log(a);

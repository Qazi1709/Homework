var a = 153;
var b = 0;
while (a > 0) {
    var r = a % 10;
    b = b + r ** 3;
    a = parseInt(a / 10);
}
if (b == 153) {
    console.log(`${153} is an Amstrong numner`);
} else {

    console.log(`${153} is not an Amstrong numner`);
}
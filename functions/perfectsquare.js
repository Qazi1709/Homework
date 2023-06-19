var readlineSync = require('readline-sync');
var Num = readlineSync.question("Enter The number :")
function perfectsquare(number) {
    let sqrt = Math.sqrt(number);
    if (sqrt === Math.floor(sqrt)) {
        console.log(`${sqrt} The number is a perfect square`);

    } else {
        console.log(`${sqrt} The number is not a perfect square`);
    }
}

let square = perfectsquare(Num);


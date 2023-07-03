var readlineSync = require('readline-sync');
var rows = readlineSync.questionInt('Enter the number of rows:');
var columns = readlineSync.questionInt('Enter the number of columns:');
let matrix = [];
for (i = 0; i < rows; i++) {
    const row = [];
    for (j = 0; j < columns; j++) {
        let ele = readlineSync.questionInt(`enter the elements at the position (${i},${j}):`);
        row.push(ele);
    }
    matrix.push(row);
}
console.log("Given Matrix is:");

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}
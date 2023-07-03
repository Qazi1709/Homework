var readlineSync = require('readline-sync');
var rows = readlineSync.questionInt('Enter the number of rows:');
var columns = readlineSync.questionInt('Enter the number of columns:');
let matrixA = [];
console.log("Enter the elelments of Matrix A:");
for (i = 0; i < rows; i++) {
    const row = [];
    for (j = 0; j < columns; j++) {
        let ele = readlineSync.questionInt(`enter the elements at the position (${i},${j}):`);
        row.push(ele);
    }
    matrixA.push(row);
}
console.log("Enter the elelments of Matrix B:");
let matrixB = [];
for (i = 0; i < rows; i++) {
    const row = [];
    for (j = 0; j < columns; j++) {
        let ele = readlineSync.questionInt(`enter the elements at the position (${i},${j}):`);
        row.push(ele);
    }
    matrixB.push(row);
}
console.log("*****Addition of Matrix*****");

function addMatrices(matrixA, matrixB) {

    var matrix = [];
    for (var i = 0; i < matrixA.length; i++) {
        var row = [];
        for (var j = 0; j < matrixA[0].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
            // console.log(`${matrixA},/t ${matrixB}`);
        }
        matrix.push(row);
    }

    return matrix;
}
var matrix = addMatrices(matrixA, matrixB);
console.log(matrix);
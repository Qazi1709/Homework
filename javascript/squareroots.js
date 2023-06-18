var a = 1, b = 2, c = 3, d;
var roo1, root2;
d = (b ^ 2 - 4 * a * c) ^ 1 / 2;
if (d > 0) {
    console.log("Both roots are REAL");
    root1 = (-b + (d) / 2 * a);
    root2 = (-b - (d) / 2 * a);
    console.log(`The roots of Quadratic equation are ${root1} & ${root2}`);
} else {
    console.log("Both roots are imaginary");
    root1 = (-b + (d) / 2 * a);
    root2 = (-b - (d) / 2 * a);
    console.log(`The roots of Quadratic equation are ${root1} & ${root2}`);
}
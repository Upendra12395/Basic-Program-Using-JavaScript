//JavaScript program to swap two variables
function swap(num1, num2) {

let temp;

//swap variables
temp = num1;
num1 = num2;
num2 = temp;

console.log(`The value of num1 after swapping: ${num1}`);
console.log(`The value of num2 after swapping: ${num2}`);
}
swap(5,6)
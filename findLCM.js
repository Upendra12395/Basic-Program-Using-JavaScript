// program to find the LCM of two integers
function findLCM(num1, num2){
    let min = (num1 > num2) ? num1 : num2;

    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}

findLCM(6,10)
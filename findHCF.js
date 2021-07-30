// program to find the HCF
function findHCF(number1, number2){
    let hcf;
    for (let i = 1; i <= number1 && i <= number2; i++) {

        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }

    // display the hcf
    console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
}
findHCF(60,72)
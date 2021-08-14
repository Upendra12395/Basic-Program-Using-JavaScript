// program to find the factors of an integer
function factor(num){
    let arr = [];
    console.log(`The factors of ${num} is:`);

    for(let i = 1; i <= num; i++) {
    
        // check if number is a factor
        if(num % i == 0) {
            arr.push(i)
        }
    }
    console.log(arr);
}

factor(26);
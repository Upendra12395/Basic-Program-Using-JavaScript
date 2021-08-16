// program to remove duplicate value from an array

function findUnique(arr){
    
    let newArray = [];
    
    for(let i of arr) {
        if(newArray.indexOf(i) === -1) {
            newArray.push(i);
        }
    }
    console.log(newArray);
}

const array = [5,3,2,6,2,7,3,7,3,8];

findUnique(array);
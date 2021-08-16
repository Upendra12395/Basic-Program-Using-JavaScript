// program to merge and remove duplicate value from an array

function mergeRemoveDuplicate(array1, array2){
    let arr = array1.concat(array2);
    let newArr = [];

    for(let i of arr) {
        if(newArr.indexOf(i) === -1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}

const arr1 = [4,3,1,7,8,9,4,3,2];
const arr2 = [3,2,4,6,7,3,9]
mergeRemoveDuplicate(arr1, arr2);
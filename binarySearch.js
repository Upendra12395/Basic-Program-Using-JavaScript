let binarySearch = function (array, x, start, end) {
    if (start > end) return false;
    let mid=Math.floor((start + end)/2);
   
    if (array[mid]===x) return true;
          
    if(array[mid] > x) 
        return binarySearch(array, x, start, mid-1);
    else
        return binarySearch(array, x, mid+1, end);
}

let array = [1, 3, 5, 7, 8, 9];
let x = 5;
   
if (binarySearch(array, x, 0, array.length-1))
    console.log("Item found");
else console.log("Item not found");
   
x = 6;
   
if (binarySearch(array, x, 0, array.length-1))
    console.log("element found")
else console.log("Element not found");                                    
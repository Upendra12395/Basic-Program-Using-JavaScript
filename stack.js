// program to implement stack data structure
const array = [];
    
    // add element to the stack
function add(element) {
        return array.push(element);
}
    
    // remove element from the stack
    function remove() {
        if(array.length > 0) {
            return array.pop();
        }
    }
    
    // view the last element
    function peek() {
        return array[array.length - 1];
    }
    
    // check if the stack is empty
    function isEmpty(){
       return array.length == 0;
    }
   
    // the size of the stack
    function size(){
        return array.length;
    }
 
    // empty the stack
function clear(){
        while(!isEmpty()){
            array.pop()
        }
       
}



add(1);
add(2);
add(4);
add(8);
console.log(array);

remove();
console.log(array);

console.log(peek());

console.log(isEmpty());

console.log(size());

clear();
console.log(array);
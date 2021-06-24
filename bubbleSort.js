function bubbleSort() {
    var array = [5,2,9,1,0,3,7,10,3];
    var len = array.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1;j++){
            if(array[j]>array[j+1]){
                var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
            }
            
        }
    }
    console.log(array);
}
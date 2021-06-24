function facto(params){
    fact =1;
    if(params==0){
        console.log(fact);
    }
    else{
        for(let i=1;i<=params;i++){
        fact = fact*i
        }
        console.log(fact);
    }
}
function isPalindrome(number)
{
    var remainder;
    var num =number; 
    var value = 0;
    while(num>0){
        remainder=num%10;
        value = value*10+remainder;
        num=parseInt(num/10);
    }
    if(value == number){
        return true;
    }
    else{
        return false;
    }
}
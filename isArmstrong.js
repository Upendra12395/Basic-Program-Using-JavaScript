function armstrong(num)
{
    var arm=0,a;
    temp=num;
    while(temp>0)
        {
        a=temp%10;
        temp=parseInt(temp/10); // convert float into Integer
        arm=arm+a*a*a;
        }
    if(arm==num)
        {
        console.log("Armstrong number");
        }
    else
        {
            console.log("Not Armstrong number");
        }
}
armstrong(153)
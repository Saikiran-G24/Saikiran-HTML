var number=23;
var count=0;
function pn()
{
    for(i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            console.log(i)      
            count=count+1
        } 
    }
    if (count==2)
    {
console.log( number+ "  is a prime number")
    }
     else
    {
console.log("it is not prime number")
    }
}

pn()

var number=4;
var count=0;
function fact()
{
    for(i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            console.log(i)      
            count=count+1
            return;
        }
        
    }
}
        fact()
        console.log(count)

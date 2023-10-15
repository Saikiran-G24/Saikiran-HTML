let n=371;
let a=n;
let res=0;
let cube;
function arm()
{
    while(n>0)
    {
        remainder=n%10;
        cube=Math.pow(remainder,3)
        res=res+cube;
        n=Math.floor(n/10)
    }
        if (res==a)
        {
            console.log("It is an Armstrong Number")
        }
         else if(res!==a)
        {
            console.log("It is Not an Armstrong Number")
        }
    
}
arm()
console.log(res)
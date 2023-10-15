let n=164331;
let remainder;
let res=0;
function sum()
{
    while(n>0)
    {
    remainder=n%10;
    res=remainder+res;
    n=Math.floor(n/10)
    }
}
sum()
    console.log(res)

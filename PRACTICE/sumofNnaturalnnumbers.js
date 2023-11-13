
var n=5;
var result = 0;

function sum(n)
{
    // return result;
// for(i=n;i>=1;i--)
// {
    
// //console.log(i)
// result = result +i;
// }
result=result+n;
console.log('result is',result)
n=n-1
if(n==0)
{
    return ;
}
sum (n)
return result;
}

 let sumofn = sum(n);
console.log("by using recursive result is "+sumofn)
// function log(num){
//     if(num > 5){
//         return;
//     }
//     console.log(num);
//     log(num + 1);
// }
// log(1)


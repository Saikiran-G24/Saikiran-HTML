
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





//Sum of N natural numbers
let num=prompt('enter a value');
let res=0;
const Nnat=function(){
    for(i=0;i<num;i++){
        res+=i
    }
    return res;
}
Nnat()
console.log(res)














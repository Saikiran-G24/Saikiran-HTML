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







//     //Sum of digits of a number recursive


// let num=9304543;
// let res=0;
// function dis(){
//            remainder=num%10
//     res+=remainder;
//         num=Math.floor(num/10)
//         // console.log(num)
// if(num<=0){
//    return; 
// }
// dis()
// }
// dis()
// console.log(res)





//     //Sum of digits of a number 


// let num=9304543;
// let res=0;
// function dis(){
//     while(num>0){
//            remainder=num%10
//     res+=remainder;
//         num=Math.floor(num/10)
//         //  console.log(num)
//     }

// }
// dis()
// console.log(res)
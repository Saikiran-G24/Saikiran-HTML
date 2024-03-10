// // //fibonacci series


// let num=10;
// let res=0;
//  let a=0;
//     let b=1;
// function fibo()
// {i=1;
//     while(i<=num){
//     res=a+b;
//     a=b;
//     // console.log(a)
//     b=res;
//         // console.log(b)
//         i++;
// }
// }
// fibo()
// console.log(res)



//fibonacci using recursion

let res=0;
let num=10;
 let a=0;
    let b=1;
function fibo(){
    res=a+b;
    a=b;
    b=res;
    num--; //10 iterations
    console.log(num)
    if(num<=0){
        return;
    }
    // num--;// if i write num-- here 11 iterations takes place.
    fibo()
}
fibo()
console.log(res)
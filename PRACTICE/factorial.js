function fac() {
  var a = 5;
  var b= prompt("enter b num");
  var result = 1;
  n = a * (a - 1) * (a - 2)*(a-3)*(a-4);
  console.log("factorial of 5 is "+n);
  if (a == 1) result = 0;
  else {
    for (i = 1; i <= b; i++) {
      result = result * i;
    }
  }
  console.log(result);
}
fac();




// //Factorial of Number


// let num=prompt('enter a value');
// let res=1;
// const Nnat=function(){
//     for(i=num;i>0;i--){
//         res*=i
//     }
//     return res;
// }
// Nnat()
// console.log(res)





//Factorial of Number recursive function


let num=prompt('enter a value');
let res=1;
const Nnat=function(){

        res*=num;
       num--;
       if(num<=0)
       {
           return;
       }
Nnat()
}
Nnat()
console.log(res)

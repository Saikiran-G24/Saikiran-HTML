function swap()
{
    var a=100;
    var b=200;

    
    console.log("before swapping",a,b);
    a=a+b;// a=300
    b=a-b;// b = 100
    a=a-b;// a = 200
    console.log("after swapping",a,b);
   // return [a,b];
}
result=swap();

    
 //Easy way to swapping two numbers:



//      let a=2;
// b=4;
// c=6;
// [a,b,]=[a,b]
// console.log(a,b,)
// //array swaping
// let arr=[3,5,6,8,9]
// let [a,b,c,d,e]=arr;
// [a,b,c,d,e]=[b,a,d,c,e]
// console.log(b,a)

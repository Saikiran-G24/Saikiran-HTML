//hello reverse using recursion
//printing hello in rerverse by recursion
let str='hello';
i=str.length-1;
function dis()
{
    if(i>=0)
    {
  console.log(str[i])
  i--;
  dis()
}
}
dis()



//printing hello in rerverse

let str1='hello';
function dis()
{
    for(i=str.length-1;i>=0;i--)
  console.log(str[i])
}
dis()


//Another method for reverse a string 

let stri='hello'
let res=stri.split('').reverse().join('')
console.log(res)


//Another method for reverse a string 

let str2='hello'
let char=(str2.length-1);
let res1='';
function rev(){
    for(i=char;i>=0;i--){
        console.log(str2[i])
        res1+=str2[i]
    }
}
rev()
console.log(res1)
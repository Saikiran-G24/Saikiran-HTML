let n=10;
let res;
function fibonacci()
{
    let a=0;b=1;
  for(i=1;i<=n;i++)  
  {
      res=a+b;
      console.log(res)
      a=b;
      b=res;
  }
}
fibonacci()

//recursion
let n=10;
let res;
 let a=0;b=1;
function fibonacci()
{
      res=a+b;
      console.log(res)
      a=b;
      b=res;

      n=n-1
      if(n<=0)
      {
        return;
      }
  fibonacci()
}
fibonacci()
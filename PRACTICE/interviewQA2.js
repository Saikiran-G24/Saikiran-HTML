//Finding 2nd largest number

const input1=[1,2,-2,11,7,1]
// const output1=7
const input2=[1,4,7,2,4,7]
// console.log(res)
// const output2=4
function dis(input2){
    let arr=[...new Set(input2)].sort((a,b)=>a-b)
return arr[arr.length-2]
    
}
 console.log(dis(input1))
  console.log(dis(input2))






  const input=[1,2,-2,11,7,1]
// const output1=7
// const input2=[1,4,7,2,4,7]
// const output2=4
function dis(input){
    let res=input.sort(function(a,b) {return b-a})// (or)let res=input1.sort((a,b)=>b-a)
return res[1]
}
 console.log(dis(input))



 

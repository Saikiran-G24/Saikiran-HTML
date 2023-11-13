


//Finding 2nd largest number but is it more complex.

const input=[1,2,-2,11,7,1]
// const output1=7
const input1=[1,4,7,2,4,7]
// console.log(res)
// const output2=4
function dis(secondL){
    let arr=secondL.sort((a,b)=>a-b)
    console.log(arr)
let res= arr[arr.length-1]
for(i=(arr.length-1);i>=0;i--){
    console.log(i)
    if(res!=secondL[i])
    {
        console.log(res)
             console.log(secondL[i])
        res=secondL[i]
        break;
    }
}
return res
    
}
 console.log('input:',dis(input))
 console.log('input1:',dis(input1))
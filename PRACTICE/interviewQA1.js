const input1={a:1,b:2,e:12,c:3,d:10}
const input2={a:2,e:12,f:6,d:10}
// const output={d:10,e:12}
const output={}
function dis(){
    for(let i in input1){
                    console.log(i)
        if(input1[i]==input2[i]){
             console.log('if',input1[i])
            output[i]=input1[i]
        }
    }
}
dis()
console.log(output)
console.log(Object.keys(input1))

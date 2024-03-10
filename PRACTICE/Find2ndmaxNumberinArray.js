
//Finding second largest number in an array
let array = [100, 345,1000, 50,23,275,]
let newArray=array.sort((a,b)=>{return a-b
})
console.log(array)  //sort changing the original array.
console.log(newArray)
let max=array[4];
function dis(){
    for(i=0;i<array.length-1;i++){       //we can write   array||newArray
        // console.log(array[i])
        if(array[i]>max){
            max=array[i]
        }
    }
                 return max;

}dis()
console.log(max)
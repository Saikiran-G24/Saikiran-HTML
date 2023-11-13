const arr=[1,2,3,4,5]
// const output=[3,4,5,1,2]
function rotatearray(){
    for(i=0;i<2;i++){
        let temp=arr[0]
        console.log('value of temp is:',temp)
        for(j=0;j<arr.length-1;j++){
            arr[j]=arr[j+1]
                            // console.log(arr)
        }
        arr[arr.length-1]=temp;
                                    // console.log(arr)
    }
}
rotatearray()
console.log(arr)

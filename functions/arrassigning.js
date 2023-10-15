let arr=[3,5,6,8,9]
let [a,b,c,d,e]=arr;
console.log(c)

//array destructuring in js
let arr='my name is saikiran is felling better now'.split(' ')
console.log(arr)
let [a,b,c,...d]=arr
console.log(typeof d,d)
console.log(typeof a,a)

//we can vlaue, index, arryname as arguments to the forEach function
let arr=[23,44,56,8,98,99]
arr.forEach((num,i,arr)=>{
    console.log(num,i,arr)
})

//when we use for of loop and forEach() method
let arr=[23,344,15,4,95]
for(let num of arr)
{
    console.log("In for of loop we get only acess to array element means values of an array itself",num)
}
arr.forEach((num,i,arr)=>{
        console.log('forEach Method  used to declare the value,property and delcare arrayname as arguments:',num,i)
})


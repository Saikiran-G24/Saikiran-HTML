//converting string to Array
//Method1
console.log('Converting String to Array of substrings.')
let str='saikiran'
let arr=str.split('')
console.log('array of substrings',arr)

//Method2
let arr1=[...str]
console.log('array of substrings',arr1)

//Method3
let arr2=Array.from(str)
console.log('array of substrings',arr2)

//converting  Array to String
console.log('Converting Array to String')
let array=['Green','Apple','Orange','Tamato']

//Method1
let string=array.join()
console.log('converting array to string:',string)

//Method2
let string1=array.toString()
console.log('converting array to string:',string1)


//Method3
let string3=[...array].toString()
console.log('converting array to string:',string3)

//Method3
let string4=[...array].join()
console.log('converting array to string:',string4)

//converting  Array to object
console.log('"Converting Array to Object:"')
let narray=['Green','Apple','Orange','Tamato']

//Method1
let obj={...narray}
console.log('we can get the properties of an obj:',obj)

//Method2
let obj1=Object.assign({},narray)
console.log('we can get the properties of an obj:',obj1)

//Using for loop
const array10=['A','B','C','D','E']
const obj10={}
const arraytoobject=(array10)=>{
    for(i=0;i<array10.length;i++){
    obj10[i]=array10[i]
    }
    return obj10
}
console.log(arraytoobject(array10))

//using array.forEach(function(currentvalue,inex,array){})
const array5=['A','B','C','D','E']
    const obj5={}
    array.forEach((currentvalue, i,array5 )=>{  //instead array we write array5
        obj5[i]=currentvalue
        // console.log(obj,i)
    })
    console.log(obj5)
// console.log(obj,i,array5)














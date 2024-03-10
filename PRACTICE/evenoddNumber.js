//  let num=parseInt(prompt('enter a value'));
// console.log(num)
function dis(num){
    if(num%2==0)
    {
        console.log(num,'It is a even number')
    }
    else if(num%2==1) {
                console.log(num,'It is odd number')

    }
}
dis(4)
dis(3)




//To find even odd number

let num=parseInt(prompt('enter a value'));
let res=(num%2==0)?"Even":"Odd";
console.log(res)
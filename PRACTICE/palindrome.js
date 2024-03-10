// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);



//palindrome


// let num=prompt('enter a number')
function palin(str){
    let res='';                             //very very imapotant line .
    for(i=str.length-1;i>=0;i--){
    res+=str[i]
    console.log(res)
    }
    if(res==str){
        return true;
        //  console.log('it is a palindrome')
    }
    else{
        return false;
                    // console.log('it is not a palindrome')
    }
}
var str1 = "racecar"; 
var str2 = "nitin"; 
var str3 = "Rama"; 
console.log(palin(str1))
console.log(palin(str2))
console.log(palin(str3))



//palindrome

// let num=prompt('enter a number')
function palin(str){
    let res='';
    for(i=str.length-1;i>=0;i--){
    res+=str[i]
    console.log(res)
    }
    if(res==str){
        // return true;
    console.log('it is a palindrome')
    }
    else{
        // return false;
     console.log('it is not a palindrome')
    }
}
// var str1 = "racecar"; 
var str2 = "nitin"; 
palin( "racecar")
palin(str2)
palin('rama')



//palindrome

function palin(str){
    let rev=str.split('').reverse().join('')
    console.log(rev)
    if(rev==str) console.log('it is a palindrome')
      else console.log('it is not a palindrome')

    
}
palin('racecar')
palin('rama')



//palindrome

function palin(str){
    let revofstring=str.length-1;
    for(i=0;i<str.length/2;i++){
        if(str[i]!==str[revofstring]){
        return console.log('it is not a palindrome');
        }
        revofstring--;
    }
    return console.log('it is palindrome')
   }
   palin('racecar')
   palin('rama')
   
//To check number it is a palindrome or not
function palin(num){
    let str=num.toString()
    console.log('str is ',str)
    let rev=str.split('').reverse().join('')
        console.log('rev is ',rev)
    if(rev==str){
        console.log('it is palindrome')
    }
    else console.log('it is not a palindrome')
    
}
palin(198891)
palin(1412)
palin(2211)







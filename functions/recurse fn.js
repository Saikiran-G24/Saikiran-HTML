var T=1;
function recurse(i)
{
    if(i>5){
        return;
    }
    
    T=(T*i);
    
    //console.log(T)
    recurse(i+1)
}
recurse(1);
console.log('result is ',T)

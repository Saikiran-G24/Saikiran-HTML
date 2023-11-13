
function addEventListener(){
    let count=1;
document.getElementById('clickme')
.addEventListener('click',function (){
    console.log('Button clicked',count++)
})

}
addEventListener()

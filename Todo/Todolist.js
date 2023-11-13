const inputbox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")
const container1 = document.getElementsByClassName("container")
function addTask()
{
    // console.log("entered add task method",addTask.value,addTask)
    if(inputbox.value=='')
    {
    alert("you must write something")
}
else
{
    let li=document.createElement('li')
    li.innerHTML=inputbox.value
    console.log("list added",li)
    listcontainer.appendChild(li)
    let span=document.createElement('span')
span.innerHTML='\u00d7';
li.appendChild(span)
// container1.classList.add('cont1');
}
inputbox.value='';
saveData();
}
listcontainer.addEventListener("click",function(e)
{
    console.log("we have to know what is target event",e)
    if(e.target.tagName==="LI") 
{
e.target.classList.toggle("checked");
saveData();
}
else if(e.target.tagName==="SPAN")
{
e.target.parentElement.remove();
saveData();

}
},false);
function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data")
}
showTask();




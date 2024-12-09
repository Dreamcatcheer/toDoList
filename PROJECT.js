/* let submit = addEventListener(click, (event)=>{
    console.log(submit);
s
}); */

let submit = document.getElementById('submit');
let addTask = document.getElementById('addTask');
let todolist = document.getElementById('todolist');
let donelist = document.getElementById('donelist');
let list = new Array();


submit.addEventListener('click',(event)=>{
    if(addTask.value !==''){
        list.push(addTask.value);
    todolist.innerHTML +='<li id="'+ (list.length-1) +'"><button onclick ="complete('+(list.length-1)+')">'+addTask.value+'</button></li>';
    addTask.value="";
    }
     //console.log(list);
});
function complete(id){
    donelist.innerHTML += '<li>'+list[id]+ '</li>'
    document.getElementById(id).style.display= "none" ;
}


function addItem()
{
    var myItem=document.getElementById("myItem");
    var text=document.getElementById("newList").value;
    if(text=='')
    {
        alert("Please Enter the item");
    }
    else
    {
        document.getElementById("newList").value="";
        var list=document.createElement("li");
        list.innerHTML=text;
        list.className="l";
        list.addEventListener('click',function(){
            list.classList.toggle('completed');
        })
        myItem.appendChild(list);
    }
}
function empty(){
    var element= document.querySelectorAll(".l");
    for(var x of element){
        x.remove();
    }
}
function clearComplete(){
    var element = document.querySelectorAll(".completed");
    for(var x of element){
        x.remove();
    }
    
}
function save(){
    var saveList = document.getElementById("myItem").innerHTML;
    localStorage.setItem("saveList", JSON.stringify(saveList));
    alert("Items are saved!!")
}

function showSavedList(){
    var savedList = localStorage.getItem("saveList");
    document.getElementById("myItem").innerHTML = JSON.parse(savedList);
}

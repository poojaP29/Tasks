let accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    let elems=document.getElementsByClassName("container")
    for(let item of elems){
      item.classList.remove("active");
      item.nextElementSibling.getElementsByClassName.maxHeight = null;
    }
    
    this.classList.toggle('active')
    let panel=this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
    }else{
      panel.style.maxHeight = panel.scrollheight = "px";
    }
    
  })
}
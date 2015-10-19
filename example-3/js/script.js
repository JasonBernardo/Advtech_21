document.onmousemove=function(evt){
   makeacircle(evt);   
}

//this methos will generate a red circle div

//param evt  the infor about the click
function makeacircle(evt){
   
    //set its horizontal pos. to that of the cursor
    
    var circle = document.createElement("div");
    circle.style.left=evt.clientX + "px";
    circle.style.top=evt.clientY + "px";
    document.body.appendChild(circle);
}


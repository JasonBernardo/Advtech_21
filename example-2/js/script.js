document.getElementsByTagName("div")[0].onclick=function(){
    blah();   
}

function blah(){
    alert("YES");
    document.getElementsByTagName("div")[0].className="wider";
}


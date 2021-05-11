function arrowfunction(index){
    const x=document.getElementById("answer" + index);
    if(x.style.display === "none" ){
        x.style.display = "block";
    }

    else{
        x.style.display = "none";
    }
}

 
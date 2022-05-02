var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 8000);


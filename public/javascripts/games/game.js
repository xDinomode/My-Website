var xmessage = null;


try{
   xmessage = document.getElementById("xmessage");
} catch(e){

}

if(xmessage !== null || ""){
    xmessage.addEventListener("click", function(){
        var box = document.getElementById("alertWrapper");
         box.classList.add("alertWrapperHidden");
    },false);
}

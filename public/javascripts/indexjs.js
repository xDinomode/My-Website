var xmessage = null;

// try{
//     xmessage = document.getElementById("xmessage");
// } catch(e){

// }

// if(xmessage !== null || ""){
//     var m = document.getElementById("alertWrapper");
//     function remove(){
//         m.style.display = "none";
//     }
//     xmessage.addEventListener("click", function(){
//         //message1wrapper.style.display = "none";
//         m.style.height = "0px";
//         setTimeout(remove, 142);
//     },false);
// }

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
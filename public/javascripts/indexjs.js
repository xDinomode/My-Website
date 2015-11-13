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

var utter = new SpeechSynthesisUtterance();
speechSynthesis.getVoices();
setTimeout(function(){
    speechSynthesis.getVoices();
    utter.voice = speechSynthesis.getVoices()[3];
}, 1000);


var speak = document.getElementById("speak");
speak.addEventListener("click", function(e){
    e.preventDefault();
    var utterance = document.getElementById("utterance");
    var text = utterance.value;
    utter.text = text;
    speechSynthesis.speak(utter);
    console.log(text);
    utterance.value = "";
}, false);

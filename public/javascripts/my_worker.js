self.addEventListener("message", function(e){
    self.postMessage(e.data + "Im woker two");
}, false);
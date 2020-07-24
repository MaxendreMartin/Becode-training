// 09-misc/01-waving-text/script.js - 9.1: waving text

(() => {
    // your code here

    var myText = document.getElementById("target");
    var myArray = myText.split(" ");
    var timeLooper;
    function loop() {
        if(myArray.length>0){
            myText.innerHTML += myArray.shift();
        }else{
            clearTimeout(timeLooper);
        }
        timeLooper =setTimeout('loop(70)' => {
            
        }, timeout);
    }
})();

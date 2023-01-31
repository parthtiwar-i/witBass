var noOfDrums = document.querySelectorAll(".drums");
for (let i = 0; i < noOfDrums.length; i++) {
    noOfDrums[i].addEventListener("click", function () {
        var clickedButton = this.className;
        makeSound(clickedButton);   
        buttonAnimation(clickedButton);     
    })
}

document.addEventListener("keypress", function(event){
    var clickedWord = event.key;
    makeSound(clickedWord);
    buttonAnimation(clickedWord);
})


function makeSound(key){
    switch (key) {
        case "w drums":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case "a drums":
            var audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;
        case "s drums":
            var audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;
        case "d drums":
            var audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;
        case "j drums":
            var audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;
        
        case "k drums":
                var audioCrash = new Audio("sounds/crash.mp3");
                audioCrash.play();             
            break;
        case "l drums":
                var audiokick = new Audio("sounds/kick-bass.mp3");
                audiokick.play();             
        case "w":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case "a":
            var audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;
        case "s":
            var audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;
        case "d":
            var audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;
        case "j":
            var audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;
        
        case "k":
                var audioCrash = new Audio("sounds/crash.mp3");
                audioCrash.play();             
            break;
        case "l":
                var audiokick = new Audio("sounds/kick-bass.mp3");
                audiokick.play();             
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout (function(){
        activeButton.classList.remove("pressed");
    },100);

}
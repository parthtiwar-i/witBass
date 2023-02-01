var x = window.matchMedia("(max-width: 700px)");
responsiveSite(x); // Call listener function at run time
x.addListener(responsiveSite); // Attach listener function on state changes



var noOfDrums = document.querySelectorAll(".drums");
for (let i = 0; i < noOfDrums.length; i++) {
  noOfDrums[i].addEventListener("click", function () {
    var clickedButton = this.className;
    console.log(clickedButton);
    makeSound(clickedButton);
  });
}

document.addEventListener("keypress", function (event) {
  var clickedWord = event.key;
  makeSound(clickedWord);
  buttonAnimation(clickedWord);
});









function makeSound(key) {
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

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function responsiveSite(x) {
  if (x.matches) {
    // If media query matches
    document.querySelector(".section1").innerHTML = `<div class="firstR btn">
      <button class="w drums">w</button>
      <button class="a drums">a</button>
      <button class="s drums">s</button>
      <button class="d drums">d</button>
    </div>
    <div class="secondR btn">
      <button class="j drums">j</button>
      <button class="k drums">k</button>
      <button class="l drums">l</button>
    </div>`;
  } else {
    document.querySelector(".section1").innerHTML = `<div class="firstR btn">
    <div id="tom3" class="s drums">
      <img class="s" data-toggle="tooltip" data-placement="top" title="s" src="images/tom3.png" alt="" />
    </div>
    <div id="tom1" class="w drums">
      <img class="w" data-toggle="tooltip" data-placement="top" title="w" src="images/tom1.png" alt="" />
    </div>
    <div id="tom2" class="a drums">
      <img class="a" data-toggle="tooltip" data-placement="top" title="a" src="images/tom2.png" alt="" />
    </div>
    <div id="tom4" class="d drums">
      <img class="d" data-toggle="tooltip" data-placement="top" title="d" src="images/tom4.png" alt="" />
    </div>
  </div>
  <div class="secondR btn">
    <div id="crash" class="k drums">
      <img width="200%" class="k" data-toggle="tooltip" data-placement="top" title="k" src="images/crash.png" alt="" />
    </div>
    <div id="kick" class="l drums">
      <img class="l" data-toggle="tooltip" data-placement="top" title="l" src="images/kick.png" alt="" />
    </div>
    <div id="snare" class="j drums">
      <img class="j" data-toggle="tooltip" data-placement="top" title=" j" src="images/snare.png" alt="" />
    </div>
  </div>`;
  }
}



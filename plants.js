function makeRed() {
  document.getElementById("one").style.backgroundColor = "red";
  setTimeout(function () {
    document.getElementById("one").style.backgroundColor = "rgb(205, 245, 253)";
  }, 2000);
}

function crazyToggle() {
  document.getElementById("two").classList.toggle("crazy");
}

function invisibleToggle() {
  document.getElementById("three").classList.toggle("invisible");
  setTimeout(function () {
    document.getElementById("three").classList.toggle("invisible")
  }, 2000);
}

function blowUp() {
  document.getElementById("four").classList.add("blowUp");
  setTimeout(function(){document.getElementById("four").classList.remove("blowUp");}, 5000);
}
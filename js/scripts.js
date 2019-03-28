//var age = parseInt(prompt("What is your age?"));

$(document).ready(function() {
    var age = prompt("How old are you?")
    if(age => 18) {
    $("#oldEnough").show();
  }
  else {
    $("#notOldEnough").show();
  }
  });

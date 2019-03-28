//var age = parseInt(prompt("What is your age?"));

$(document).ready(function() {
  function ageCheck() {
    var age = prompt("How old are you?")
    if(age <= 18) {
      $("#notOldEnough").show();
    }
    else if(age <= 100) {
      $("#oldEnough").show();
    }
    else {
      console.log("else");
      // ageCheck();
    }
  }
  ageCheck();
});

function welcome(){
    alert("Welcome!");
  }

function calculate(){
  var target = document.getElementById("prA");
  var score = document.getElementById("a1score").value;

  target.innerText = score;
}
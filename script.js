var secret = Math.floor(Math.random() * 50) + 1;
var attempts = 5;
var input = document.getElementById("guess");
var button = document.getElementById("button");
var attemptsText = document.getElementById("attempts");

button.onclick = function () {
  var guess = Number(input.value);   

  if (!input.value || guess < 1 || guess > 50) {
    alert("Please enter a number between 1 and 50.");
    return;
  }

  attempts = attempts - 1;           
  attemptsText.textContent = "Attempts left: " + attempts;
  input.value = "";                  

  if (guess === secret) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("win").classList.remove("hidden");
  } 
  else if (attempts === 0) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("lose").classList.remove("hidden");
    document.getElementById("loseText").textContent =
      "The correct number was " + secret + ".";
  } 
  else if (guess > secret) {
    alert("Too high! Try again.");   
  } 
  else {
    alert("Too low! Try again.");   
  }
};

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    button.click();
  }
});

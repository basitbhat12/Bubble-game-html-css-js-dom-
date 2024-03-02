var time = 60;
var score = 0;
var randomNumber;

// Make bubbles
function makeBubble() {
  var bub = "";

  for (var i = 0; i < 90; i++) {
    bub += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#bottom").innerHTML = bub;
}

// Timer fuction
function timer() {
  var stopped = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timerval").textContent = time;
    } else {
      clearInterval(stopped);

      // Create an h1 element for "GAME OVER"
      const gameOverText = document.createElement('h1');
      gameOverText.textContent = "GAME OVER";

      // Set styles using element properties
      gameOverText.style.fontWeight = 'bold'; // Font weight - bold
      gameOverText.style.fontStyle = 'italic'; // Font style - italic
      gameOverText.style.color = 'red'; // Font color - red

      // Clear the existing content in #bottom
      const bottomElement = document.querySelector("#bottom");
      bottomElement.innerHTML = "";

      // Append the styled "GAME OVER" text to #bottom
      bottomElement.appendChild(gameOverText);
    }
  }, 1000);
}


// hit fuction
function updateHit() {
  randomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = randomNumber;
}

// Score increase function
function scoreInc() {
  score += 10;
  document.querySelector("#sxore").textContent = score;
}

var button = document.querySelector("#bottom");
button.addEventListener("click", function (properties) {
  var hit = Number(properties.target.textContent);
  if (hit == randomNumber) {
    scoreInc();
    makeBubble();
    updateHit();
  }
});

makeBubble();
timer();
updateHit();

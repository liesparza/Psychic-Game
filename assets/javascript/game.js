

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];
  //     document.getElementById("buttons").innerHTML = alphabet;




var lives;
var counter; // if i win or not
var word;
var space;
var guess;   // what you need to guess
var guesses=[ ]; // guesses made
var chosenMovie;
var playerWins;
var playerLosses;
var movies= [ "alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"];

 var playerWinsText = document.getElementById("player-wins");
 var playerLossesText = document.getElementById("player-losses");

var showLives = document.getElementById("mylives");


 // create alphabet ul
 var buttons = function () {
  myButtons = document.getElementById("buttons");
  letters = document.createElement("ul");

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter";
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}

  
 
 // Create guesses ul
  var result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
		//playerScores
		playerLosses++;
		
		
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
		  playerWins++;
      }
    }
	   
    playerWinsText.innerText = playerWins;
    playerLossesText.innerText = playerLosses;
	   
  };


 // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();

      } else {
        comments();
      }
    }
  }

   
   
   
   // Play
 var play = function () {
  //  movies= [ "alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"];

    chosenMovie = movies[Math.floor(Math.random() * movies.length)];
    word = chosenMovie[Math.floor(Math.random() * chosenMovie.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
	  playerWins = 0;
playerLosses= 0;
    space = 0;
    result();
    comments();
	  
};

  play();


 document.getElementById("reset").onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
//    context.clearRect(0, 0, 400, 400);
    play();
  }







      
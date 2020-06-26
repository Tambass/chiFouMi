/*
var userChoice = prompt("Choisissez entre pierre papier ciseaux");

console.log(userChoice);

var computerChoice = Math.random();

if (computerChoice < 0.33) {
  computerChoice = "pierre";
} else if (computerChoice <= 0.67) {
  computerChoice = "papier";
} else {
  computerChoice = "ciseaux";
}

console.log(computerChoice);

var compare = function (var1, var2) {
  if (var1 === var2) {
    return "égalité";
  } else if (var1 === "pierre") {
    if (var2 === "ciseaux") {
      return "Gagné";
    } else if (var2 === "papier") {
      return "Perdu";
    }
  } else if (var1 === "papier") {
    if (var2 === "ciseaux") {
      return "Perdu";
    } else if (var2 === "pierre") {
      return "Gagné";
    }
  } else if (var1 === "ciseaux") {
    if (var2 === "pierre") {
      return "Perdu";
    } else if (var2 === "papier") {
      return "Gagné";
    }
  }
};

console.log("Le résultat est : ", compare(userChoice, computerChoice));
*/

var pierre = document.getElementById("pierre");
var papier = document.getElementById("papier");
var ciseaux = document.getElementById("ciseaux");
var computerChoice = document.querySelector(".computerChoice");
var result = document.getElementById("result");
var userChoice = document.querySelector(".btn");

function choice() {
  var computerChoice = Math.random();

  if (computerChoice < 0.33) {
    computerChoice = "pierre";
  } else if (computerChoice <= 0.67) {
    computerChoice = "papier";
  } else {
    computerChoice = "ciseaux";
  }

  console.log('Ordi choisi : ', computerChoice);
  console.log('Je choisi : ', userChoice)

  document.querySelector(".computerChoice").innerHTML = computerChoice;

  var compare = function (var1, var2) {
    if (var1 === var2) {
      return "Égalité";
    } else if (var1 === pierre) {
      if (var2 === ciseaux) {
        return "Gagné";
      } else if (var2 === papier) {
        return "Perdu";
      }
    } else if (var1 === papier) {
      if (var2 === ciseaux) {
        return "Perdu";
      } else if (var2 === pierre) {
        return "Gagné";
      }
    } else if (var1 === ciseaux) {
      if (var2 === pierre) {
        return "Perdu";
      } else if (var2 === papier) {
        return "Gagné";
      }
    }
  };

  console.log("Le résultat est : ", compare(userChoice, computerChoice));

  document.querySelector("#result").innerHTML = compare(
    userChoice,
    computerChoice
  );
}

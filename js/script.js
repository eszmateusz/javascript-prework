function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Wygrał komputer!');
    } else(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Jest remis!');
    } else(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Wygrał komputer!');
    } else(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Jest remis!');
    } else(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Wygrał komputer!');
    } else(argComputerMove == 'nożyce' && argClayerMove == 'nożyce'){
      printMessage('Jest remis!');
    } else(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
    } else(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
    } else(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
      printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
    }

// Odczytywanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

// Odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

/*

// Wynik gry
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrał komputer!');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Jest remis!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrał komputer!');
} else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Jest remis!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrał komputer!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Jest remis!');
} else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
} else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
} else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Użyłeś błędnej wartości. Spróbuj jeszcze raz.');
}

*/
{ 
  const playGame = function(playerInput){

    clearMessages();

    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    // Odczytywanie ruchu komputera
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera to: ' + argComputerMove);

    // Odczytanie ruchu gracza
    // const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
      } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Wygrał komputer!';
      } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return 'Jest remis!';
      } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
      } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Wygrał komputer!';
      } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Jest remis!';
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Wygrał komputer!';
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return 'Jest remis!';
      } else{
        return 'Użyłeś błędnej wartości. Spróbuj jeszcze raz.';
      }
    }

    printMessage('WYNIK GRY: ' + displayResult(argComputerMove, argPlayerMove));

  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

}
/*
if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nożyce';
}


if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
}

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
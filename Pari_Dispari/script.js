const playerNum = getPromptNumber();
let playerPlay = getPromptPariDispari();
const min = 1;
const max = 5;

const pcNum = getRandomNumber(min, max);

let add = pcNum + playerNum;

let result = pariDispari(add);
const rootMessage = `You played ${playerPlay} putting ${playerNum}.
'Pc played ${pcNum} so
`
let message = 'You Lost';

if(result === playerPlay) message = 'You Won';

console.log(rootMessage + message);



function pariDispari(num){
  if(num % 2){
    return 'Dispari';
  }else{
    return 'Pari';
  }
}



function getPromptPariDispari(){
  let validPlay = false;
  let playerNum;
  do {
    playerNum = prompt('Pari o Dispari');
    if(playerNum === 'Pari' || playerNum === 'Dispari'){
      validPlay = true
    }
  } while (!validPlay)
  return playerNum;
}


function getPromptNumber(){
  let correctNum = false;
  let playerNum;
  while(!correctNum){
    playerNum = parseInt(prompt('Inserisci numero da 1 a 5'));
    if(!isNaN(playerNum) && playerNum > 0 && playerNum < 6){
      correctNum = true;
    }
  }
  return playerNum
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
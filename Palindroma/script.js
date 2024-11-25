const word = prompt("Scrivi parola").toLocaleLowerCase()
let message;

if(word === wordReverse(word)){
  message='la parola è palindroma'
}else{
  message='la parola non è palindorma'
}

console.log(message);

function wordReverse(word){
  
  let wordReversed = '';
  for(let i = word.length - 1; i >= 0; i--){
    wordReversed+=word[i]
  }
  return wordReversed
}
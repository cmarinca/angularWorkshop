const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Escriba la palabra o frase a evaluar: ', (answer) => {
    let userWord = answer;
    let wordBackwards = '';
    
    for(let i=userWord.length -1 ; i >= 0 ; i--){
        if(userWord[i] != ' '){
            wordBackwards = wordBackwards.concat(userWord[i]);
        }
    }
    console.log('Su palabra/frase: '+ userWord);
    console.log('Su palabra/frase al reves: ' + wordBackwards);
    
    let userWorkNoSpaces = userWord.replace(/ /g,'')

    if(wordBackwards === userWorkNoSpaces){
        console.log('Su palabra es un palindromo');
    }else{
        console.log('Su palabra no un palindromo');
    }
    rl.close();
  });

window.onload=()=>{
    generateText();
    document.onkeyup=(e)=>{
        if( e.key == 'Backspace')
            composedString = composedString.substr(0,composedString.length - 1)
        else if( e.key.length == 1)
        composedString  += e.key


        halfleft.innerText = composedString;
      // if( composedString

        if(targetString == composedString)
            generateText();
        //if()
    }
}
var keysOptions = [
    'f',
    'j',
    'a',
    'l',
    'd',
    'k',
    's'
]
var targetString = "";
var composedString = "";
var completdString = "";
var keyOptions = 4;

function generateText(){
    targetString = "";
    composedString = "";
    for(var i = 0 ; i < 4; i++)
    {        
        var randWordLength = 2 + Math.floor( Math.random()*5);
        var newWord = '';
        for(var j = 0 ; j < randWordLength ; j++)
             newWord += keysOptions[ Math.floor( Math.random()*keyOptions)];

        targetString +=  newWord + ' ' ;
    }
    halfright.innerText = targetString;
  
}
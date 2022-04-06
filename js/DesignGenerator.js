 function generateParagraph() {

     //Choose Sentence
     var denialInput = [
"I think... it is probably not a good idea to have ___ right now.",
 "Humm... well, we won't be able to make it.", 
"Oh, I don't think you will understand even if I tell you.", 
"I knew what kind of thing you will say, so just don't even be bothered.",
"It is just too late.", 
"Maybe tomorrow, but decently not today.", 
"Unless the sun will not raise.", "I won't do it.", "We don't live on the moon.", "No, jump into the pond, she is not here.", "What? You think I need breath to live?.", "I am not sleeping.", "That is enough.", "I will never see a butterfly again."];
     var denial = denialInput[Math.floor(Math.random() * denialInput.length)];

     //Set List as default
     var chooseList = ''

     //Grab finished sentence
     var chooseList = denial;

     // Insert concatenated sentence to document
     document.getElementById("brief").innerHTML = chooseList;

 }
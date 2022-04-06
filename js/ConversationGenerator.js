const array = [
"I think... it is probably not a good idea to have ___ right now.",
    "Humm... well, we won't be able to make it.",
    "Oh, I don't think you will understand even if I tell you.",
    "I knew what kind of thing you will say, so just don't even be bothered.",
    "It is just too late.",
    "Maybe tomorrow, but definitely not today.",
    "Unless the sun will not rise.",
    "I won't do it.",
    "We don't live on the moon.",
    "No, jump into the pond, she is not here.",
    "What? You think I need to breath to live?.",
    "I am not sleeping.",
    "That is enough.",
    "I will never see a butterfly again."
];

const arrayx = ['Blue is not a colour.', 'I never believe in truth.','You lied about those flying pigs in your back yard.','Put a sock in it.','No, since my tomorrow will never be a yesterday.',
'I never heard of it.',
'Stop dreaming about that afternoon when we swim in the liquid desert.',
'You are drunk, you have no idea what you are talking about.',
'You get it wrong, it is for the last dinner.',
'Because we are not in the history of tomorrow.',
'Why can’t you promise me to catch the wind to my bedroom?',
'Butterflies don’t have wings like I dont have teeth.',
'Never again.',
'All forgiveness kills my foreverness, but there is no need to apologize for that.'];

var array2 = [];

function Conversation() {
document.getElementById("genbut").style.display = "none";
document.getElementById("genbut2").style.display = "none";
document.getElementById("genbut3").style.display = "inline-block";

    let arrayChoice = array[Math.floor(Math.random() * array.length)];

    if (array2.length == array.length) {
        //end conversation
        document.getElementById("brief2").innerHTML = 'DENIALS EXHAUSTED: <br>choose new speakers.';
        //clear array2
        array2.splice(0, array.length);
        document.getElementById("brief").innerHTML = '';
        document.getElementById("brief2").style.color = "#eedf54";
document.getElementById("genbut").style.display = "inline-block";
document.getElementById("genbut2").style.display = "inline-block";
document.getElementById("genbut3").style.display = "none";

    } else if (array2.length == 0) {
        //for the first time the function is called.
        //print the result
        document.getElementById("brief").innerHTML = arrayChoice;
        //append the choice to the array2 
        array2.push(arrayChoice);
        document.getElementById("brief2").innerHTML = '';

    } else if (array2.length < array.length) {

        while (array2.includes(arrayChoice)) {

            arrayChoice = array[Math.floor(Math.random() * array.length)];
        }
        document.getElementById("brief").innerHTML = arrayChoice;
        array2.push(arrayChoice);
    }
}

function Conversation2() {
document.getElementById("genbut").style.display = "none";
document.getElementById("genbut2").style.display = "none";
document.getElementById("genbut4").style.display = "inline-block";

    let arrayChoice = arrayx[Math.floor(Math.random() * arrayx.length)];

    if (array2.length == arrayx.length) {
        //end conversation
        document.getElementById("brief2").innerHTML = 'DENIALS EXHAUSTED: <br>choose new speakers';
        //clear array2
        array2.splice(0, arrayx.length);
        document.getElementById("brief").innerHTML = '';
        document.getElementById("brief2").style.color = "#eedf54";
document.getElementById("genbut").style.display = "inline-block";
document.getElementById("genbut2").style.display = "inline-block";
document.getElementById("genbut4").style.display = "none";

    } else if (array2.length == 0) {
        //for the first time the function is called.
        //print the result
        document.getElementById("brief").innerHTML = arrayChoice;
        //append the choice to the array2 
        array2.push(arrayChoice);
        
        document.getElementById("brief2").innerHTML = '';

    } else if (array2.length < arrayx.length) {

        while (array2.includes(arrayChoice)) {

            arrayChoice = arrayx[Math.floor(Math.random() * arrayx.length)];
        }
        document.getElementById("brief").innerHTML = arrayChoice;
        array2.push(arrayChoice);
    }
}
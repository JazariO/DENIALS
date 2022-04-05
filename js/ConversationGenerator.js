const array = ["I think... it is probably not a good idea to have ___ right now.",
    "Humm... well, we won't be able to make it.",
    "Oh, I don't think you will understand even if I tell you.",
    "I knew what kind of thing you will say, so just don't even be bothered.",
    "It is just too late.",
    "Maybe tomorrow, but decently not today.",
    "Unless the sun will not raise.",
    "I won't do it.",
    "We don't live on the moon.",
    "No, jump into the pond, she is not here.",
    "What? You think I need breath to live?.",
    "I am not sleeping.",
    "That is enough.",
    "I will never see a butterfly again."
];

const array2 = [];

function Conversation() {
    let arrayChoice = array[Math.floor(Math.random() * array.length)];

    //array2.push(arrayChoice);
    //document.getElementById("brief").innerHTML = (arrayChoice);
    //document.getElementById("brief2").innerHTML = (array2);

    if (array2.length == array.length) {
        //end conversation
        document.getElementById("brief2").innerHTML = 'DENIALS EXHAUSTED: Press the button to restart.';
        //clear array2
        array2.splice(0, array.length);
        document.getElementById("brief").innerHTML = '';
        document.getElementById("brief2").style.color = "#ddce43";

        //document.getElementById("brief3").innerHTML = 'The array sliced has: ' + array2;
    } else if (array2.length == 0) {
        //for the first time the function is called.
        //print the result
        document.getElementById("brief").innerHTML = arrayChoice;
        //append the choice to the array2 
        array2.push(arrayChoice);
        //document.getElementById("brief").innerHTML = '';
        document.getElementById("brief2").innerHTML = '';

    } else if (array2.length < array.length) {

        while (array2.includes(arrayChoice)) {

            arrayChoice = array[Math.floor(Math.random() * array.length)];
        }
        document.getElementById("brief").innerHTML = arrayChoice;
        array2.push(arrayChoice);
    }
    /*else if (array2.length < array.length) {
               //
               for (let x of array2) {
                   if (array2[x].compare(arrayChoice)) {
                       while (array2[x].compare(arrayChoice)) {
                           arrayChoice = array[Math.floor(Math.random() * array.length)];
                       }
                   } else {
                       document.getElementById("brief").innerHTML = arrayChoice;
                       array2.push(arrayChoice);
                   }
               }
           } */
}
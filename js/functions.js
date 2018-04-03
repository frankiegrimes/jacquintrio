// ---------- Navigation ------------------ //


// ---------- CHANGE QUOTES FUNCTION ------------------ //

var quoteArray = ['"Front runners taking to the chamber music stage.”', '"Impressive skill and character"','"Yeah they&#8217re actually really sound"'];
var citeArray = ["Classical Music Magazine", "The Times", "Frankie Grimes"];
var quotes = $("#quote-array")[0];
var cites = $("#cite-array")[0];
var counter = 0;
var end = quoteArray.length - 1;

function scroll_forwards() {

    if (counter === end){
        counter = 0;    
    } else {
        counter++;
    }

    quotes.innerHTML = quoteArray[counter];
    cites.innerHTML = citeArray[counter];
    setTimeout(scroll_forwards, 2000);
}

scroll_forwards();
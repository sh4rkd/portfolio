let span = document.querySelector(".typewriter span");
let lettersQuantity = span.getAttribute("data-text").split(", "); 
let maxLetterSize = lettersQuantity.length; 

let secondsPerCharacter = 0.15; 
let secondsBetweenWord = 1.5;
let textIndex = 0; 

typing(textIndex, lettersQuantity[textIndex]); 

function typing(textIndex, text) {
    let charIndex = 0; 
    let maxCharIndex = text.length - 1; 
    
    let typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, secondsBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, secondsPerCharacter * 1000); 
}

const deleting = (textIndex, text) => {
    let minCharIndex = 0; 
    let charIndex = text.length - 1; 

    let typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxLetterSize ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, lettersQuantity[textIndex]) }, secondsBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, secondsPerCharacter * 1000); 
}


let span = document.querySelector(".typewriter span");
let textArr = span.getAttribute("data-text").split(", "); 
let maxTextIndex = textArr.length; 

let sPerChar = 0.15; 
let sBetweenWord = 1.5;
let textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    let charIndex = 0; 
    let maxCharIndex = text.length - 1; 
    
    let typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

const deleting = (textIndex, text) => {
    let minCharIndex = 0; 
    let charIndex = text.length - 1; 

    let typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}
// script file for interracting with a webpage - index.html has been altered to represent this interraction

// edit the text of a paragraph (or other block) by referencing its tag
let textArea = document.getElementById('text-area'); // from the tag on index.html "id='text-area'"

textArea.innerText = "Hello World!"; // change this text to a different string

// do something when a button is clicked!
let okButton = document.getElementById('ok-button'); // connects to the button with tag "ok-button"
okButton.addEventListener('click', function() {
  textArea.innerText = "Button Clicked!";
}); // when this button is clicked, the script listens and changes the text with tag "text-area" to something else

// remove some text when a button is clicked

let textArea = document.getElementById('text-area'); //find the "text-area" block

let okButton = document.getElementById("OK-button"); // find the button "OK-button"

okButton.addEventListener('click', function() {
  textArea.style.display = 'none';
}); // upon clicking, it sets the text-area to nothing with "none"

// now define another button in index.html (not going to actually put it, but you could make in the same way you made the first one, with a different id)

let koButton = document.getElementById("KO-button"); // find the KO-button

koButton.addEventListener('click', function() {
  textArea.style.display = 'block';
}); // upon clicking, it sets the text-area to a block with "block"

// we could now toggle the text block on and off with these two buttons 


// document.getElementById('stdbtn').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
//     // You can add your form submission logic here, like sending the form data to a server via AJAX
//     alert('Your message has been sent!');
// });

const textElement = document.getElementById("textchanging");
let currentTextIndex = 0;
const texts = ["Namaste!!", "Hi There!!","Bonjour!!"];

function changeText() {
  textElement.innerText = texts[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}
setInterval(changeText, 1000); 

const roleElement = document.getElementById("role");
let currentroleIndex = 0;
const roles = ["Learner", "Developer","Student"];

function changerole() {
  roleElement.innerText = roles[currentroleIndex];
  currentroleIndex = (currentroleIndex + 1) % roles.length;
}
setInterval(changerole, 1000);
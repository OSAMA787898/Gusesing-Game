// console.log("hello World!");
// console.log("Osamsa mikrani");
// let a = 20;
// let b = 30;
// console.log("sum is :", a+b);

// let color = "green";

// if(color =="red"){
//     console.log("Stop");
// }
// else if(color =="green"){
//     console.log("Go slow");
// }
// else if(color =="green"){
//     console.log("Go");
// }

// let size = "L";
// if(size === "XL"){
//     console.log("Price is Rs. 250");
// }
// else if(size === "L"){
//     console.log("Price is Rs. 200");
// }
// else if(size === "M"){
//     console.log("Price is Rs. 100");
// }
// else if(size === "S"){
//     console.log("Price is Rs. 50");
// }
// else{
//     console.log("Wronge size has been entered");
// }

// let days = 1;

// switch(days) {
//     case 1:
//         console.log('Monday');
//         break;

//         case 2:
//             console.log('Tuesday');
//             break;

//         case 3:
//             console.log('Wednesday');
//             break;
//     }


// let querter = 2;
// switch(querter){
//     case 1: 
//         console.log("January,February,March");
//         break;
//         case 2:
//         console.log("April,May,June");
//         break;
//         case 3:
//         console.log("July,August,September");
//         break;
//         case 4:
//         console.log("October,November,December");
//         break;
//         default:
//             console.log("Not a querter")
// }

// let num = 4;
// if(num%10 == 0){
//     console.log("good")
// }else{
//     console.log("bed");
// }

// let name = prompt("enter your name");
// let age = prompt("enter your age");
// alert(`${name} is ${age} year old`);

// let str = "apples";
// if( (str[0] == 'a' || start [0] == 'A') && (str.length > 5)) {
//     console.log("golden string");
// }
// else {
//     console.log("not a golden string");
// }

// let a = 5;
// let b = 18;
// let c = 13;

// if(a > b) {
//     if( a > c) { 
//         console.log(a,"is largest");
//     }
//     else{
//         console.log(c,"is largest");
//     }
// }
// else{
//     if(b>c) {
//         console.log(b,"is largest");
//     }
//     else{
//         console.log(c,"is largest");
//     }
// }

// let a = 10;
// let b = 20;
// let c = 15;

// if(a > b) {
//     if(a > c) {
//     console.log(a, "is largest");
// } 
//  else{
//     console.log(c, "is largest");
//     }
// }
//  else{
//     if(b>c){
//         console.log(b, "is largest");
//     }
// else{
//     console.log(c,"is largest");
// }
// }



// let str = "apple";
// if((str[0]=='a'|| str[0]=='A') && (str.length > 5)) {
//     console.log("String is golden");
// }else{
//     console.log("String is not golden")
// }


// let msg = "help!";
// console.log(msg.trim().toUpperCase());


// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");


// for(i=1; i<=5; i++){
//     console.log(i);
// }

//favorite Movie
// const favMovie = "Avatar";
// let guess = prompt("guess my favorite movie");
// while( (guess!=favMovie) && (guess!="quit") ) {
//     guess = prompt("Wrong guess please try again");
// }
// if(guess == favMovie){
//     console.log("Congrats!!");
// } else{
//     console.log("You quit");
// }

// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);


// const post =  {
//     username: "@osamaMikrani",
//     content: "related to lifestyle",
//     likes: 120,
//     post: 3,
//     tags: ["osama", "kingkhan"]
// };

// const student = {
//     name: "Osama",
//     age: 20,
//     marks: 65.5,
//     city: "Mumbai"
// };

// Get DOM elements
const setupPhase = document.getElementById('setup-phase');
const gamePhase = document.getElementById('game-phase');
const maxNumberInput = document.getElementById('maxNumber');
const startGameBtn = document.getElementById('startGame');
const guessInput = document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuess');
const quitGameBtn = document.getElementById('quitGame');
const messageElement = document.getElementById('message');
const maxDisplay = document.getElementById('maxDisplay');

let randomNumber;
let maxNumber;

// Start game button click handler
startGameBtn.addEventListener('click', () => {
    maxNumber = parseInt(maxNumberInput.value);
    if (maxNumber && maxNumber > 0) {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        maxDisplay.textContent = maxNumber;
        setupPhase.style.display = 'none';
        gamePhase.style.display = 'block';
        messageElement.textContent = '';
        guessInput.value = '';
    } else {
        messageElement.textContent = 'Please enter a valid number greater than 0';
        messageElement.style.color = '#e53e3e';
    }
});

// Submit guess button click handler
submitGuessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess)) {
        messageElement.textContent = 'Please enter a valid number';
        messageElement.style.color = '#e53e3e';
        return;
    }

    if (guess === randomNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
        messageElement.style.color = '#38a169';
        submitGuessBtn.disabled = true;
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        messageElement.textContent = 'Too low! Try a higher number.';
        messageElement.style.color = '#e53e3e';
    } else {
        messageElement.textContent = 'Too high! Try a lower number.';
        messageElement.style.color = '#e53e3e';
    }
});

// Quit game button click handler
quitGameBtn.addEventListener('click', () => {
    messageElement.textContent = `Game Over! The number was ${randomNumber}`;
    messageElement.style.color = '#4a5568';
    submitGuessBtn.disabled = true;
    guessInput.disabled = true;
});

// Enter key press handler for inputs
maxNumberInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startGameBtn.click();
    }
});

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitGuessBtn.click();
    }
});
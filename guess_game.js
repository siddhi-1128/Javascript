let user = prompt("Enter max range");

let num = Math.floor(Math.random() * user ) + 1;

let num1 = prompt("Guess the number");

while (true) {
    if (num1 == "quit") {
        console.log("Quitting game");
        break;
    }
    if(num == num1) {
        console.log("You guessed it");
        break
    }else if(num1 < num){
        num1 = prompt("Your guess is too small. Please, Enter again.");
        
    }
    else{
        num1 = prompt("Your guess is too large. Please, Enter again.");
    }
    // else{
    //     console.log("Try again");
    //     num1 = prompt("Enter again");
    // }
}
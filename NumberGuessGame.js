function guessNumber(){
    // var randomNum=Math.floor(Math.random() * 51);
    var randomNum=Math.floor(Math.random()*51)

    // output to the console for debugging
    console.log(randomNum)

    // declare a variable
    var guess;
    guess=prompt("please enter a number between 0 and 50");
   
    
    if(guess<randomNum){
        window.alert("Your guess is too low ");

    }else if(guess>randomNum){
        window.alert("Your guess is too high");

    }else if(guess==randomNum){
        window.alert("You guessed it.You win!!!")

    }else{
        window.alert("Error");

    }
}
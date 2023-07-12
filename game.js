let randomNumber;
let buttonColours=["red", "blue", "green", "yellow"];
let randomChosenColour;
let gamePattern=[];
let lvl=0;
pressA()
function nextSequence(){
    randomNumber=Math.floor((Math.random()*4));
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    makeSound(randomChosenColour);
    buttonAnimation(randomChosenColour);
    $("h1").text("LEVEL " + lvl)
}

function pressA(){
    $(document).keypress(function(evt){
    console.log(evt.key)
    if(lvl==0){
        lvl++
       nextSequence()
    }
});
}

$(".btn").on("click", function(evt){
    
    var e=evt.target.id;
    buttonAnimation(e);
    makeSound(e);
    buttonCheck(e);
})

function buttonAnimation(evt) {    
    $("."+evt).addClass("pressed");
    setTimeout(function(){
        $("."+evt).removeClass("pressed");
    },200)

}

function makeSound(evt){
    
    var gameAudio=new Audio("./sounds/"+evt +".mp3");
    gameAudio.play();
       
}

function buttonCheck(evt){
    let i=0;
    i++;
    console.log("comparing... "+ gamePattern.length)
    if(i==gamePattern.length-1){
    console.log("it wokrs poggys");
    setTimeout(nextSequence, 1000);
    lvl++;
    $("h1").text("LEVEL " + lvl)
    }else if(evt==gamePattern[i]&&i<gamePattern.length-1){
        buttonCheck(evt)
        console.log("comparing... "+ gamePattern.length-1)
    }else if(evt!=gamePattern[i]){
    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){    $("body").removeClass("game-over");},200)
    $("h1").text("Game Over, Press Any Key to Restart");
    console.log(lvl);
    lvl=0;
    gamePattern=[];
    pressA()
}
}

function playPattern(){
    for(let i=0; i<gamePattern[length]; i++){
    buttonAnimation(gamePattern[i]);
    makeSound(gamePattern[i]);
    }
}
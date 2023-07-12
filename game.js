let randomNumber;
let buttonColours=["red", "blue", "green", "yellow"];
let randomChosenColour;
let gamePattern=[];
let lvl=0;
let i=-1;
pressA()
function nextSequence(){
    randomNumber=Math.floor((Math.random()*4));
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    makeSound(randomChosenColour);
    buttonAnimation(randomChosenColour);
        lvl++;
        i=-1;
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
    i++;
    console.log("current i "+ i + " and length " + gamePattern.length)
    
    console.log("comparing... "+ evt + gamePattern[i]);
    if(lvl==0||evt!=gamePattern[i]){
        console.log("comparing... "+ evt + gamePattern[i]);
        gameOver();
        console.log(lvl);

    }else if(i==gamePattern.length-1&&evt==gamePattern[i]){
        console.log("NEXT LEVEL");
        setTimeout(nextSequence, 1000);
    }
}
function gameOver(){
    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){    $("body").removeClass("game-over");},200)
    $("h1").text("Game Over, Press Any Key to Restart");
    lvl=0;
    i=-1;
    gamePattern=[];
    pressA()
}

function playPattern(){
    for(let i=0; i<gamePattern[length]; i++){
    buttonAnimation(gamePattern[i]);
    makeSound(gamePattern[i]);
    }
}

//variables
var gameState=0;
var playerCount=0;
var form, game, player;
var database, dbPosition;
var PLAY=1, START=0;
var allPlayers, TOTALPLAYERCOUNT=2, gameState=0;
var car1, car2, car3, car4;
var cars;


function setup(){
    //setup database
    database = firebase.database ();
    //log
    console.log(displayWidth);
    console.log(displayHeight);
    //create canvas using displayWidth and Height to be able to use on any screen
    createCanvas(displayWidth-20,displayHeight-30);

    //create game
    game=new Game();
    //get the gameState
    game.getState(); 
    //start the game and create the form
    game.start();

}

function draw(){

    //when 4 players log into game
    if (playerCount==4){

        //update the gameState to play (play=1)
        game.update(1);

    }

    if (gameState==1){

        //clear everything on the screen
        clear();
        //start the game
        game.play();

        //display all car sprites
        drawSprites();
    }

    
    
}



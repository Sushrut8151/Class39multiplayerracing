class Game {
constructor(){

}

getState(){
var getstateref = database.ref('gameState')
getstateref.on("value",function(data){
gameState  = data.val();
})

}
update(state){
    database.ref('/').update({
        gameState: state
    });

}

async start(){
    if (gameState === 0){
        player = new Player();
        var playerCountref = await database.ref("playerCount").once("value");
        if(playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
        }
       
        form = new Form();
        form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("red",redcarImg);
    car1.scale = 0.1;
    car2 = createSprite(300,200);
    car2.addImage("blue",bluecarImg);
    car2.scale = 0.1;
    car3 = createSprite(500,200);
    car3.addImage("green",greencarImg);
    car3.scale = 0.1;
    car4 = createSprite(700,200);
    car4.addImage("orange",orangecarImg);
    car4.scale = 0.1;

    cars = [car1,car2,car3,car4];
}

play()
{
    form.hideform();
    textSize(20);
    text("Game Starts",150,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined)
    {
        background("white");
        image(racetrackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var displaypos = 200;
        var index = 0;
        var x= 175;
        var y;

        for(var i in allPlayers)
       {
          index = index+1;  
        
          x = x+200;
        
         y = displayHeight - allPlayers[i].distance;
         cars[index-1].x = x;
         cars[index-1].y = y;
         if(index === player.index){
           cars[index-1].shapeColor = "red";
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index - 1].y;
           
         }

        
        /* if(i === "player"+player.index) {
                fill("red");
            }
            else{
              fill("black");
            }
              displaypos = displaypos+20;
              textSize(15);
         text(allPlayers[i].name + ":" + allPlayers[i].distance,120,displaypos);
        */
       }
    }
    if(keyIsDown(UP_ARROW)&&player.index !== null){
     player.distance = player.distance+50;
     player.update();
    }
    drawSprites();
   }

   
}
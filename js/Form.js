class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement("h2");

    }
      hideform(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide(); 
    
    }
 display(){
     var title = createElement("h1");
     title.html("CAR RACING");
     title.position(displayWidth/2 + 100 , 0 );


     // creating inputs
     
     this.input.position(displayWidth/2 +100 , displayHeight/2 - 140 );
     this.button.position(displayWidth/2 + 270 , displayHeight/2 - 140);

    //creating mouse pressed function
    this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide(); 
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("HELLO " +player.name);
         this.greeting.position(displayWidth/2 + 100 , displayHeight/2 - 140);
     });
 }   
 
}
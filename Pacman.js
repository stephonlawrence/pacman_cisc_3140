class Maze {

    constructor() {
        /*self grid represents the game board with each array 
    being all the y coordinates in each x coordinate. Grid is 31 by 28.
    If we decide to make multiple levels we can have constructor generate multiple maps*/ 
        this.grid = [
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0],                                   
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0], 
        [0,0,0,0,0,1,0,0,0,0,0,3,4,3,3,3,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,0,0,1,3,3,3,0,3,3,3,0,3,0,0,1,1,1,1,0,0,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,3,3,3,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,3,0,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,1,1,1,0,0,1,0],
        [0,1,0,0,0,1,0,0,1,0,3,3,3,0,3,0,3,3,3,0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,2,1,1,1,1,1,0,3,3,3,0,3,0,3,3,3,0,1,1,1,2,0,0,1,1,1,1,0],    
        [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0] 
        ];
    }
    
    //gate at 13,12 / 14,12

    getGrid() {
        return this.grid;
    }

    drawWall(x,y) { //Grid graphic for a wall
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(x*20, y*20, 20, 20);
    }

    drawEmptySpace(x,y) { //Grid graphic for an empty space
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);
    }

    drawPellet(x,y) { //Grid graphic for a pellet spacei
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);
        ctx.fillStyle = "#ffff77";
        ctx.fillRect(x*20+10,y*20+10,3,3);
    }

    drawPowerPellet(x,y) { //Grid graphic for a power pellet
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);        
        ctx.fillStyle = "#ffff77";
        ctx.fillRect(x*20+7,y*20+7,6,6);
    }

    drawCageGate(x,y) { //Grid graphic for cage gate (properties of wall for pacman, wall/empty space for ghost)
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(x*20, y*20, 20, 20);    
        ctx.fillStyle = "#FFFDD0";
        ctx.fillRect(x*20, y*20+10, 20, 10);
    }
    
    drawBonusItem(/*sprite*/) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        //function.drawFromIMGFile("sprite.jpg");
        ctx.fillStyle = "#544d75";
        ctx.fillRect(270, 340, 20, 20);
    }   

    drawLevel() {
        for (var x = 0; x < 28; x++) {
            for (var y = 0; y < 31; y++) {
                if (this.grid[x][y] == 3) { // EMPTY SPACE
                    this.drawEmptySpace(x,y);
                }
                else if (this.grid[x][y] == 2) { //POWER PELLET
                    this.drawPowerPellet(x,y);
                }
                else if (this.grid[x][y] == 1) { //PELLET
                    this.drawPellet(x,y);
                }
                else if (this.grid[x][y] == 4) { //CAGE GATE
                    this.drawCageGate(x,y); 
                }
                else { //WALL
                    this.drawWall(x,y);
                }
            }
        }
    }

    /*The black background canvas for our game
    should have an extra bit of space below the maze for score and other UI elements*/
    drawCanvas() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 560, 650);
    }

}

class Ghost {

    constructor(startXPos, startYPos, boxTimer, inBox, nickname, map) {
        this.map = map;
        this.nickname = nickname;
        this.xPos = startXPos;
        this.yPos = startYPos;
        this.boxTimer = boxTimer; //how long ghost has been in box, only leaves after set interval
        this.inBox = inBox; //boolean for if ghost is in box at start or after being eaten
    }
 
    drawSprite() {
        if (this.nickname == "Blinky") {
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
        } 
        else if (this.nickname == "Pinky") {
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#FFC3E1";
            ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
        }
        else if (this.nickname == "Inky") {
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#00FFFF";
            ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
        }
        else if (this.nickname == "Clyde") {
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#FFB732";
            ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
        }
    }
     
    redrawSprite(x, y) {
        if (this.map.getGrid()[x][y] == 3) { //EMPTY SPACE
            this.map.drawEmptySpace(x,y);
        }
        else if (this.map.getGrid()[x][y] == 2) { //POWER PELLET
            this.map.drawPowerPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 1) { //PELLET
            this.map.drawPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 4) { //CAGE GATE
            this.map.drawCageGate(x,y);
        }
    }
    
    //eventually shift between passive movement and aggressive movement
    move() {
        var direction = Math.floor(Math.random() * Math.floor(4));
        
        if (this.boxTimer < 70 && this.boxTimer % 2 == 0) { //ghost pacing in box
            this.redrawSprite(this.xPos,this.yPos);
            this.yPos = this.yPos-1;
            this.drawSprite();
            this.boxTimer++;    
        }
        else if (this.boxTimer < 70 && this.boxTimer % 2 != 0) { //ghost pacing in box
            this.redrawSprite(this.xPos,this.yPos);
            this.yPos = this.yPos+1;
            this.drawSprite();
            this.boxTimer++;
        }
        else if (this.boxTimer >= 70 && this.inBox) { //if time to move out of box
            //13,12     14,12
            if (this.xPos < 13) { //move right to below gate
                this.redrawSprite(this.xPos,this.yPos);
                this.xPos = this.xPos+1;
                this.drawSprite();
            }
            else if (this.xPos > 14) {//move left to below gate
                this.redrawSprite(this.xPos,this.yPos);
                this.xPos = this.xPos-1;
                this.drawSprite();
            }
            else if (this.yPos > 11) { //move up to gate
                this.redrawSprite(this.xPos,this.yPos);
                this.yPos = this.yPos-1;
                this.drawSprite();
                if (this.yPos == 11) { //If passed through gate, begin normal movement
                    this.inBox = false;
                }
            }
        }
        else {
            if (direction == 0) { //RIGHT
                if (this.map.getGrid()[this.xPos+1][this.yPos] != 0) {
                    this.redrawSprite(this.xPos,this.yPos);
                    this.xPos = this.xPos+1;
                    this.drawSprite();
                }
            } 
            else if (direction == 1) { //LEFT
                if (this.map.getGrid()[this.xPos-1][this.yPos] != 0) {
                    this.redrawSprite(this.xPos,this.yPos);
                    this.xPos = this.xPos-1;
                    this.drawSprite();
                }
            }  
            else if (direction == 2) { //UP
                if (this.map.getGrid()[this.xPos][this.yPos-1] != 0) {
                    this.redrawSprite(this.xPos,this.yPos);
                    this.yPos = this.yPos-1;
                    this.drawSprite();
                }
            }  
            else if (direction == 3) { //DOWN
                if (this.map.getGrid()[this.xPos][this.yPos+1] != 0 && this.map.getGrid()[this.xPos][this.yPos+1] != 4) {
                    this.redrawSprite(this.xPos,this.yPos);
                    this.yPos = this.yPos+1;
                    this.drawSprite();
                }
            }    
        }
    }
    
}

class Pacman {

    constructor(/*game*/ map) {
        this.map = map;
        this.xPos = 13;
        this.yPos = 23;
        this.direction = null;
        this.eaten = null;
        this.lives = null;      
    }
    
    setDirection(direction) {
        this.direction = direction;
    }
    
    move() {
        console.log("pacman movement + direction: " + this.direction);
        if (this.direction == "right") { //RIGHT
            console.log("pacman right movement check");
            if (this.map.getGrid()[this.xPos+1][this.yPos] != 0) {
                console.log("pacman moving right");
                this.redrawSprite(this.xPos,this.yPos);
                this.xPos = this.xPos+1;
                this.drawSprite();
            }
        } 
        else if (this.direction == "left") { //LEFT
            if (this.map.getGrid()[this.xPos-1][this.yPos] != 0) {
                this.redrawSprite(this.xPos,this.yPos);
                this.xPos = this.xPos-1;
                this.drawSprite();
            }
        }  
        else if (this.direction == "up") { //UP
            if (this.map.getGrid()[this.xPos][this.yPos-1] != 0) {
                this.redrawSprite(this.xPos,this.yPos);
                this.yPos = this.yPos-1;
                this.drawSprite();
            }
        }  
        else if (this.direction == "down") { //DOWN
            if (this.map.getGrid()[this.xPos][this.yPos+1] != 0 && this.map.getGrid()[this.xPos][this.yPos+1] != 4) {
                this.redrawSprite(this.xPos,this.yPos);
                this.yPos = this.yPos+1;
                this.drawSprite();
            }
        }
    }
    
    drawSprite() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ffff00";
        ctx.fillRect(this.xPos*20, this.yPos*20, 20, 20);
    }
    
    redrawSprite(x, y) {
        if (this.map.getGrid()[x][y] == 3) { //EMPTY SPACE
            this.map.drawEmptySpace(x,y);
        }
        else if (this.map.getGrid()[x][y] == 2) { //POWER PELLET
            this.map.drawPowerPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 1) { //PELLET
            this.map.drawPellet(x,y);
        }
        else if (this.map.getGrid()[x][y] == 4) { //CAGE GATE
            this.map.drawCageGate(x,y);
        }
    }
    
}

class BonusItem {
    
    constructor(score/*, sprite*/) {
        this.score = score;
        this.isActive = true;
        this.xPos = 13;
        this.yPos = 17;
        /*this.sprite = sprite;*/
    }
    
  /*  
     🍒 Cherry: 100 points.
    🍓 Strawberry: 300 points
    🍊 Orange: 500 points
    🍎 Apple: 700 points
    🍈 Melon: 1000 points
  Galaxian Boss: 2000 points
    🔔 Bell: 3000 points
    🔑 Key: 5000 points 
  */
}
    
    
    

class Game {

    constructor(ghosts, pacman) {
        this.ghosts = ghosts;
        this.pacman = pacman;
        this.timer = 0;
        console.log(maze1.getGrid()[5][5] + "<-- maze1 from inside another class"); //WORKS
    }
    
    //adds eventListener to window
    loadListener() {  
        document.addEventListener("keydown", this.direct);
    }
    
    //upon keypress of any arrowkey, function will set pacman's direction
    direct(e) {
        var key = e.which
               
        if (key == 37) {
            pacman.setDirection("left");
        }
        else if (key == 38) {
            pacman.setDirection("up");
        }
        else if (key == 39) {
            pacman.setDirection("right");
        }
        else if (key == 40) {
            pacman.setDirection("down");
        }
    }
    
    moveGhosts() {
        //one block movement = 200ms
        for (var x = 0; x < 4; x++) {
            ghosts[x].move();
        }
        this.timer++;
    }
    
    spawnBonusFruit() { //bonus fruits currently on a timer. Will eventually be score based.
        //NOTE: Currently does not redraw after ghost walks over fruit, fix.
        var ctx = document.getElementById("myCanvas").getContext("2d");
        /*
        if (this.timer == 5) {
            cherry = new BonusItem(100);
            maze1.grid[13][17] = 9; //bonus item
            maze1.drawBonusItem();
            
            
        }
        if (this.timer == 80) {
            strawberry = new BonusItem(300);
            ctx.fillStyle = "#544d75";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 140) {
            strawberry = new BonusItem(500);
            ctx.fillStyle = "#fcaec9";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 210) {
            strawberry = new BonusItem(700);
            ctx.fillStyle = "#ed192d";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 270) {
            strawberry = new BonusItem(1000);
            ctx.fillStyle = "#FFF000";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 340) {
            strawberry = new BonusItem(2000);
            ctx.fillStyle = "#FFF000";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 400) {
            strawberry = new BonusItem(3000);
            ctx.fillStyle = "#FFF000";
            ctx.fillRect(270, 340, 20, 20);
        }
        if (this.timer == 460) {
            strawberry = new BonusItem(5000);
            ctx.fillStyle = "#FFF000";
            ctx.fillRect(270, 340, 20, 20);
        }
        */
  }
  
  //gameplay loop
  playGame() {
    this.moveGhosts();
    this.pacman.move();
    this.spawnBonusFruit();
  }
  
}
 
           
/*TODO: implement these subtypes of walls for beautifying the maze
        
        //Maze boundary walls have a different look than the walls of obstacle blocks
        
        Vertical Boundary Wall = x
        Horizontal Boundary Wall = y
        Top Left Boundary corner = z
        Top Right Boundary Corner = a
        Bottom Left Boundary Corner = b
        Bottom Left Boundary Corner = c
        
        Vertical Block Wall = x
        Horizontal Block Wall = y
        Top Left Block corner = z
        Top Right Block Corner = a
        Bottom Left Block Corner = b
        Bottom Left Block Corner = c
*/

//Beautify walls test
/*
//Vertical Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(570, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(575, 50, 10, 20); //Vertical Black Square

//Horizontal Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(600, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(600, 55, 20, 10); //Horizontal Black Square

//Top Left Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(625, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(630, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(630, 55, 10, 15); //Vertical Black Square

//Top Right Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(650, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(650, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(655, 55, 10, 15); //Vertical Black Square

//Bottom Left Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(675, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(680, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(680, 50, 10, 15); //Vertical Black Square

//Bottom Right Boundary Wall
ctx.fillStyle = "#0000FF";
ctx.fillRect(700, 50, 20, 20); //Solid Blue Base
ctx.fillStyle = "#000000";
ctx.fillRect(705, 55, 15, 10); //Horizontal Black Square
ctx.fillRect(705, 50, 10, 15); //Vertical Black Square
*/






var maze1 = new Maze();

//Ghost initiation
blinky = new Ghost(13, 11, 70, false, "Blinky", maze1);
pinky = new Ghost(13, 14, 50, true, "Pinky", maze1);
inky = new Ghost(11, 14, 30, true, "Inky", maze1);
clyde = new Ghost(15, 14, 10, true, "Clyde", maze1);

//Pacman initiation
pacman = new Pacman(maze1);

ghosts = new Array(blinky, pinky, inky, clyde);
game = new Game(ghosts, pacman);
game.loadListener();

//Draws game at initial position
maze1.drawCanvas();
maze1.drawLevel();
blinky.drawSprite();
pinky.drawSprite();
inky.drawSprite();
clyde.drawSprite();
pacman.drawSprite();

//game actions execute every 200ms
setInterval(game.playGame.bind(game),200);

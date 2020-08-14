var ball;
var database
var position 
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var Bpf = database.ref("Car/position");
    Bpf.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown("a")){
        writePosition(-1,0);
    }
    else if(keyDown("d")){
        writePosition(1,0);
    }
    else if(keyDown("w")){
        writePosition(0,-1);
    }
    else if(keyDown("s")){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Car/position").set({
        x:ball.x+x,
        y:ball.y+y

    })
    
}
function readPosition(data){
position=data.val();
ball.x = position.x
ball.y = position.y
}
function showError(){
    console.log("ERROR FIX IT")
}
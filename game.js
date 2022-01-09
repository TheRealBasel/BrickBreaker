// Enemy DRAW
const ENEMY_WIDTH = 120;
const ENEMY_HEIGHT = 30;
const CANVAS = document.getElementById("myCanvas")
const CANVAS_CONTEXT = CANVAS.getContext("2d");
const ENEMY_POSITION = [
    100, 400, 700
]
function drawEnemy(x,y) {
    CANVAS_CONTEXT.beginPath();
    CANVAS_CONTEXT.rect(x, y, ENEMY_WIDTH, ENEMY_HEIGHT);
    CANVAS_CONTEXT.fillStyle = "#0095DD";
    CANVAS_CONTEXT.fill();
    CANVAS_CONTEXT.closePath();
}

let enemyCurrentX = []
let enemyCurrentY = []

function draw() {
    CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    for (let i = 0; i < 3; i++) {
        if (!enemyCurrentX[i]){
            enemyCurrentX[i] = ENEMY_POSITION[i];
            enemyCurrentY[i] = - Math.floor(Math.random() * 400);
        }
        drawEnemy( enemyCurrentX[i], enemyCurrentY[i] );
        enemyCurrentY[i] -= -2;
        if ( enemyCurrentY[i] > CANVAS.height ){
            enemyCurrentY[i] = - Math.floor(Math.random() * 11)
            enemyCurrentX[i] = false;
        }
    }
    drawBall();
    if ( ballCurrentX > CANVAS.width || ballCurrentY > CANVAS.height ){
        ballCurrentX = CANVAS.width/2;
        ballCurrentY = CANVAS.height-30;
    }else{
        ballCurrentY += -2;    
    }
}


// Ball Draw

var ballCurrentX = CANVAS.width/2;
var ballCurrentY = CANVAS.height-30;

function drawBall() {
    CANVAS_CONTEXT.beginPath();
    CANVAS_CONTEXT.arc(ballCurrentX, ballCurrentY, 10, 0, Math.PI*2);
    CANVAS_CONTEXT.fillStyle = "#0095DD";
    CANVAS_CONTEXT.fill();
    CANVAS_CONTEXT.closePath();
}

setInterval(draw, 20);

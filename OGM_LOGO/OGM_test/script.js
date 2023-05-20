const array = ['', 'idle', 'jump', 'fall'];
const secarray = ['', 'magenta', 'blue', 'red'];

let playerState = array[1];

window.addEventListener('click', function(e){
    playerState = array[Math.floor( Math.random()*3 ) + 1];
    secplayerState = secarray[Math.floor( Math.random()*3 ) + 1];
 });

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 982;
const CANVAS_HEIGHT = canvas.height = 1307;

const playerImage = new Image();
playerImage.src ='fire.jpeg';
const spriteWidth = 982;
const spriteHeight = 1307;


let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 6,
    },
    {
        name: 'fall',
        frames: 6,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;         
        let positionY = index * spriteHeight; 
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames; 
});
console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

window.onload = function() {
    var c = document.getElementById("canvas2");
    const CANVA_WIDTH = c.width = 600;
    const CANVA_HEIGHT = c.height = 600;
    var ct = c.getContext("2d");
    var img = document.getElementById("scream");
    ct.drawImage(img, 0, 0, CANVA_WIDTH, CANVA_HEIGHT);
    var gradient = ct.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ct.fillStyle = gradient;
    ct.font = "80px Arial";
    ct.fillText("ONE WITH GOD",0,300);
    ct.fillText("MEDIA",180,400);
}


window.onload = function() {

canvas = document.getElementById('bbcCanvas');

BACKGROUND_SIZE = {
    width:window.innerWidth,
    height:window.innerHeight
}


ctx = canvas.getContext('2d');
BACKGROUND_COLOR = 'rgb(255, 255, 255)';

UPDATE_TIME = 50;

bbcInit();
bbcUpdate();

canvas.width = BACKGROUND_SIZE.width;
canvas.height = BACKGROUND_SIZE.height;

}

function bbcInit() {
start = Date.now();

bbcShape1 = {
    point:{ x:300.0, y:100.0 },
    points:[[20.0, 65.36], [86.6, 50.0], [40.0, 100.0], [86.6, 150.0], [20.0, 134.64], [0.0, 200.0], [-20.0, 134.64], [-86.6, 150.0], [-40.0, 100.0], [-86.6, 50.0], [-20.0, 65.36]],
    color:{ r:50.0, g:255.0, b:0.0 },
    rotation:0,
    around:{ x:0, y:0 }
};

p1 = bbcShape1;

updateTime = 1000 * UPDATE_TIME;
}

function bbcUpdate() {
if(Date.now() > start + updateTime) {
    bbcInit();
}

p1.point.x += 0.2;
p1.point.y += 0.2;

p1.rotation += 1.0;
p1.around.x = 300.0;
p1.around.y = 100.0;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = 'rgb(50.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1.around.x, bbcShape1.around.y);
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.translate(-bbcShape1.around.x, -bbcShape1.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1.point.x, bbcShape1.point.y);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[0][0], bbcShape1.point.y + bbcShape1.points[0][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[1][0], bbcShape1.point.y + bbcShape1.points[1][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[2][0], bbcShape1.point.y + bbcShape1.points[2][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[3][0], bbcShape1.point.y + bbcShape1.points[3][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[4][0], bbcShape1.point.y + bbcShape1.points[4][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[5][0], bbcShape1.point.y + bbcShape1.points[5][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[6][0], bbcShape1.point.y + bbcShape1.points[6][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[7][0], bbcShape1.point.y + bbcShape1.points[7][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[8][0], bbcShape1.point.y + bbcShape1.points[8][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[9][0], bbcShape1.point.y + bbcShape1.points[9][1]);
ctx.lineTo(bbcShape1.point.x + bbcShape1.points[10][0], bbcShape1.point.y + bbcShape1.points[10][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}

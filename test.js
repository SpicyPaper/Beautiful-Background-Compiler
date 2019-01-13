
window.onload = function() {

canvas = document.getElementById('bbcCanvas');

BACKGROUND_SIZE = {
    width:window.innerWidth,
    height:window.innerHeight
}

ctx = canvas.getContext('2d');
BACKGROUND_COLOR = 'rgb(255, 255, 255)';

UPDATE_TIME = 5.0;

bbcInit();
bbcUpdate();

canvas.width = BACKGROUND_SIZE.width;
canvas.height = BACKGROUND_SIZE.height;

}

function bbcInit() {
start = Date.now();

BACKGROUND_COLOR = 
ctx.fillStyle = 'rgb(0.0, 0.0, 0.0)';
;

UPDATE_TIME = 6.1;

bbcShape1 = {
    point:{ x:250.0, y:150.0 },
    radius:10.0,
    color:{ r:120.0, g:230.0, b:0.0 },
    rotation:0,
    around:{ x:0, y:0 }
};

bbcShape2 = {
    point:{ x:300.0, y:200.0 },
    size:{ width:25.0, height:47.0 },
    color:{ r:0.0, g:0.0, b:255.0 },
    rotation:0,
    around:{ x:0, y:0 }
};

r1 = bbcShape2;

updateTime = 1000 * UPDATE_TIME;
}

function bbcUpdate() {
if(Date.now() > start + updateTime) {
    bbcInit();
}

r1.rotation += 0.5;
r1.around.x = 312.5;
r1.around.y = 223.5;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = 'rgb(120.0, 230.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1.around.x, bbcShape1.around.y);
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.translate(-bbcShape1.around.x, -bbcShape1.around.y);
ctx.beginPath();
ctx.arc(bbcShape1.point.x, bbcShape1.point.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 0.0, 255.0)';

ctx.save();
ctx.translate(bbcShape2.around.x, bbcShape2.around.y);
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.translate(-bbcShape2.around.x, -bbcShape2.around.y);
ctx.beginPath();
ctx.rect(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.size.width, bbcShape2.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}

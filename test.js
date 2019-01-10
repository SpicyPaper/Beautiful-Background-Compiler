
window.onload = function() {

canvas = document.getElementById('bbcCanvas');

BACKGROUND_SIZE = {
    x:window.innerWidth,
    y:window.innerHeight
}


ctx = canvas.getContext('2d');
BACKGROUND_COLOR = 'rgb(255, 255, 255)';
bbcInit();
bbcUpdate();

canvas.width = BACKGROUND_SIZE.x;
canvas.height = BACKGROUND_SIZE.y;

}

function bbcInit() {
start = Date.now();
updateTime = 1000 * 50;

BACKGROUND_COLOR = 
ctx.fillStyle = 'rgb(0.0, 255.0, 255.0)';
;

bbcShape1 = {
    point:{
    x:232,
    y:100.0
},
    radius:30.0,
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

c1 = bbcShape1;

bbcShape2 = {
    point:{
    x:232,
    y:200.0
},
    radius:10.0,
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

c2 = bbcShape2;

}

function bbcUpdate() {
if(Date.now() > start + updateTime)
{
    bbcInit();
}

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1.around.x, bbcShape1.around.y);
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.translate(-bbcShape1.around.x, -bbcShape1.around.y);
ctx.beginPath();
ctx.arc(bbcShape1.point.x, bbcShape1.point.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape2.around.x, bbcShape2.around.y);
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.translate(-bbcShape2.around.x, -bbcShape2.around.y);
ctx.beginPath();
ctx.arc(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}

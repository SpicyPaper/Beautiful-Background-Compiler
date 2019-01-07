
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {
start = Date.now();
updateTime = 1000 * 50;

bbcShape1 = {
    point:{
    x:
Math.floor(Math.random() * (500.0 - 0.0 + 1)) + 0.0
,
    y:100.0
},
    radius:50.0,
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

setTimeout(bbcUpdate, 1000 / 60);

}

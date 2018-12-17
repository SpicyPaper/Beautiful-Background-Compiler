
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {

a = 100.0;

bbcShape1 = {
    x:a,
    y:100.0,
    radius:50.0,
    color:{
    r:255.0,
    g:0.0,
    b:0.0
}
};

c1 = bbcShape1;

bbcShape2 = {
    x:400.0,
    y:100.0,
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
}
};

}

function bbcUpdate() {

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.beginPath();
ctx.arc(bbcShape1.x, bbcShape1.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.beginPath();
ctx.arc(bbcShape2.x, bbcShape2.y, bbcShape2.radius, 0, 2 * Math.PI);
ctx.fill();

setTimeout(bbcUpdate, 1000 / 60);

}

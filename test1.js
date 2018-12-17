
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {

a = 100.0;

bbcShape1 = {
    point:{
    x:a,
    y:100.0
},
    radius:50.0,
    color:{
    r:255.0,
    g:0.0,
    b:0.0
}
};

c1 = bbcShape1;

bbcShape2 = {
    point:{
    x:400.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
}
};

bbcShape3 = {
    point:{
    x:200.0,
    y:200.0
},
    size:{
    width:50.0,
    height:150.0
},
    color:{
    r:0.0,
    g:255.0,
    b:0.0
}
};

r1 = bbcShape3;

}

function bbcUpdate() {

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.beginPath();
ctx.arc(bbcShape1.point.x, bbcShape1.point.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.beginPath();
ctx.arc(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.beginPath();
ctx.rect(bbcShape3.point.x, bbcShape3.point.y, bbcShape3.size.width, bbcShape3.size.height);
ctx.fill();
ctx.stroke();

setTimeout(bbcUpdate, 1000 / 60);

}

window.onload = function() {

canvas = document.getElementById('bbcCanvas');
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {

bbcShape1 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [334.64, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [263.34, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

p1 = bbcShape1;

}

function bbcUpdate() {

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape1.points[0][0], bbcShape1.points[0][1]);
ctx.lineTo(bbcShape1.points[1][0], bbcShape1.points[1][1]);
ctx.lineTo(bbcShape1.points[2][0], bbcShape1.points[2][1]);
ctx.lineTo(bbcShape1.points[3][0], bbcShape1.points[3][1]);
ctx.lineTo(bbcShape1.points[4][0], bbcShape1.points[4][1]);
ctx.lineTo(bbcShape1.points[5][0], bbcShape1.points[5][1]);
ctx.lineTo(bbcShape1.points[6][0], bbcShape1.points[6][1]);
ctx.lineTo(bbcShape1.points[7][0], bbcShape1.points[7][1]);
ctx.lineTo(bbcShape1.points[8][0], bbcShape1.points[8][1]);
ctx.lineTo(bbcShape1.points[9][0], bbcShape1.points[9][1]);
ctx.lineTo(bbcShape1.points[10][0], bbcShape1.points[10][1]);
ctx.lineTo(bbcShape1.points[11][0], bbcShape1.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}

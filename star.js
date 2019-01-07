
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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

bbcShape2 = {
    points:[[310.0, 100.0], [330.0, 165.36], [396.6, 150.0], [344.64, 200.0], [396.6, 250.0], [330.0, 234.64], [310.0, 300.0], [290.0, 234.64], [223.4, 250.0], [273.34, 200.0], [223.4, 150.0], [290.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape3 = {
    points:[[320.0, 100.0], [340.0, 165.36], [406.6, 150.0], [354.64, 200.0], [406.6, 250.0], [340.0, 234.64], [320.0, 300.0], [300.0, 234.64], [233.4, 250.0], [283.34, 200.0], [233.4, 150.0], [300.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape4 = {
    points:[[330.0, 100.0], [350.0, 165.36], [416.6, 150.0], [364.64, 200.0], [416.6, 250.0], [350.0, 234.64], [330.0, 300.0], [310.0, 234.64], [243.4, 250.0], [293.34, 200.0], [243.4, 150.0], [310.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape5 = {
    points:[[340.0, 100.0], [360.0, 165.36], [426.6, 150.0], [374.64, 200.0], [426.6, 250.0], [360.0, 234.64], [340.0, 300.0], [320.0, 234.64], [253.4, 250.0], [303.34, 200.0], [253.4, 150.0], [320.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape6 = {
    points:[[350.0, 100.0], [370.0, 165.36], [436.6, 150.0], [384.64, 200.0], [436.6, 250.0], [370.0, 234.64], [350.0, 300.0], [330.0, 234.64], [263.4, 250.0], [313.34, 200.0], [263.4, 150.0], [330.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape7 = {
    points:[[360.0, 100.0], [380.0, 165.36], [446.6, 150.0], [394.64, 200.0], [446.6, 250.0], [380.0, 234.64], [360.0, 300.0], [340.0, 234.64], [273.4, 250.0], [323.34, 200.0], [273.4, 150.0], [340.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape8 = {
    points:[[370.0, 100.0], [390.0, 165.36], [456.6, 150.0], [404.64, 200.0], [456.6, 250.0], [390.0, 234.64], [370.0, 300.0], [350.0, 234.64], [283.4, 250.0], [333.34, 200.0], [283.4, 150.0], [350.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape9 = {
    points:[[380.0, 100.0], [400.0, 165.36], [466.6, 150.0], [414.64, 200.0], [466.6, 250.0], [400.0, 234.64], [380.0, 300.0], [360.0, 234.64], [293.4, 250.0], [343.34, 200.0], [293.4, 150.0], [360.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape10 = {
    points:[[390.0, 100.0], [410.0, 165.36], [476.6, 150.0], [424.64, 200.0], [476.6, 250.0], [410.0, 234.64], [390.0, 300.0], [370.0, 234.64], [303.4, 250.0], [353.34, 200.0], [303.4, 150.0], [370.0, 165.36]],
    color:{
    r:255.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

}

function bbcUpdate() {

bbcShape1.rotation += 3.0;

bbcShape2.rotation += 3.0;

bbcShape3.rotation += 3.0;

bbcShape4.rotation += 3.0;

bbcShape5.rotation += 3.0;

bbcShape6.rotation += 3.0;

bbcShape7.rotation += 3.0;

bbcShape8.rotation += 3.0;

bbcShape9.rotation += 3.0;

bbcShape10.rotation += 3.0;

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

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape2.points[0][0], bbcShape2.points[0][1]);
ctx.lineTo(bbcShape2.points[1][0], bbcShape2.points[1][1]);
ctx.lineTo(bbcShape2.points[2][0], bbcShape2.points[2][1]);
ctx.lineTo(bbcShape2.points[3][0], bbcShape2.points[3][1]);
ctx.lineTo(bbcShape2.points[4][0], bbcShape2.points[4][1]);
ctx.lineTo(bbcShape2.points[5][0], bbcShape2.points[5][1]);
ctx.lineTo(bbcShape2.points[6][0], bbcShape2.points[6][1]);
ctx.lineTo(bbcShape2.points[7][0], bbcShape2.points[7][1]);
ctx.lineTo(bbcShape2.points[8][0], bbcShape2.points[8][1]);
ctx.lineTo(bbcShape2.points[9][0], bbcShape2.points[9][1]);
ctx.lineTo(bbcShape2.points[10][0], bbcShape2.points[10][1]);
ctx.lineTo(bbcShape2.points[11][0], bbcShape2.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape3.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape3.points[0][0], bbcShape3.points[0][1]);
ctx.lineTo(bbcShape3.points[1][0], bbcShape3.points[1][1]);
ctx.lineTo(bbcShape3.points[2][0], bbcShape3.points[2][1]);
ctx.lineTo(bbcShape3.points[3][0], bbcShape3.points[3][1]);
ctx.lineTo(bbcShape3.points[4][0], bbcShape3.points[4][1]);
ctx.lineTo(bbcShape3.points[5][0], bbcShape3.points[5][1]);
ctx.lineTo(bbcShape3.points[6][0], bbcShape3.points[6][1]);
ctx.lineTo(bbcShape3.points[7][0], bbcShape3.points[7][1]);
ctx.lineTo(bbcShape3.points[8][0], bbcShape3.points[8][1]);
ctx.lineTo(bbcShape3.points[9][0], bbcShape3.points[9][1]);
ctx.lineTo(bbcShape3.points[10][0], bbcShape3.points[10][1]);
ctx.lineTo(bbcShape3.points[11][0], bbcShape3.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape4.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape4.points[0][0], bbcShape4.points[0][1]);
ctx.lineTo(bbcShape4.points[1][0], bbcShape4.points[1][1]);
ctx.lineTo(bbcShape4.points[2][0], bbcShape4.points[2][1]);
ctx.lineTo(bbcShape4.points[3][0], bbcShape4.points[3][1]);
ctx.lineTo(bbcShape4.points[4][0], bbcShape4.points[4][1]);
ctx.lineTo(bbcShape4.points[5][0], bbcShape4.points[5][1]);
ctx.lineTo(bbcShape4.points[6][0], bbcShape4.points[6][1]);
ctx.lineTo(bbcShape4.points[7][0], bbcShape4.points[7][1]);
ctx.lineTo(bbcShape4.points[8][0], bbcShape4.points[8][1]);
ctx.lineTo(bbcShape4.points[9][0], bbcShape4.points[9][1]);
ctx.lineTo(bbcShape4.points[10][0], bbcShape4.points[10][1]);
ctx.lineTo(bbcShape4.points[11][0], bbcShape4.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape5.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape5.points[0][0], bbcShape5.points[0][1]);
ctx.lineTo(bbcShape5.points[1][0], bbcShape5.points[1][1]);
ctx.lineTo(bbcShape5.points[2][0], bbcShape5.points[2][1]);
ctx.lineTo(bbcShape5.points[3][0], bbcShape5.points[3][1]);
ctx.lineTo(bbcShape5.points[4][0], bbcShape5.points[4][1]);
ctx.lineTo(bbcShape5.points[5][0], bbcShape5.points[5][1]);
ctx.lineTo(bbcShape5.points[6][0], bbcShape5.points[6][1]);
ctx.lineTo(bbcShape5.points[7][0], bbcShape5.points[7][1]);
ctx.lineTo(bbcShape5.points[8][0], bbcShape5.points[8][1]);
ctx.lineTo(bbcShape5.points[9][0], bbcShape5.points[9][1]);
ctx.lineTo(bbcShape5.points[10][0], bbcShape5.points[10][1]);
ctx.lineTo(bbcShape5.points[11][0], bbcShape5.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape6.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape6.points[0][0], bbcShape6.points[0][1]);
ctx.lineTo(bbcShape6.points[1][0], bbcShape6.points[1][1]);
ctx.lineTo(bbcShape6.points[2][0], bbcShape6.points[2][1]);
ctx.lineTo(bbcShape6.points[3][0], bbcShape6.points[3][1]);
ctx.lineTo(bbcShape6.points[4][0], bbcShape6.points[4][1]);
ctx.lineTo(bbcShape6.points[5][0], bbcShape6.points[5][1]);
ctx.lineTo(bbcShape6.points[6][0], bbcShape6.points[6][1]);
ctx.lineTo(bbcShape6.points[7][0], bbcShape6.points[7][1]);
ctx.lineTo(bbcShape6.points[8][0], bbcShape6.points[8][1]);
ctx.lineTo(bbcShape6.points[9][0], bbcShape6.points[9][1]);
ctx.lineTo(bbcShape6.points[10][0], bbcShape6.points[10][1]);
ctx.lineTo(bbcShape6.points[11][0], bbcShape6.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape7.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape7.points[0][0], bbcShape7.points[0][1]);
ctx.lineTo(bbcShape7.points[1][0], bbcShape7.points[1][1]);
ctx.lineTo(bbcShape7.points[2][0], bbcShape7.points[2][1]);
ctx.lineTo(bbcShape7.points[3][0], bbcShape7.points[3][1]);
ctx.lineTo(bbcShape7.points[4][0], bbcShape7.points[4][1]);
ctx.lineTo(bbcShape7.points[5][0], bbcShape7.points[5][1]);
ctx.lineTo(bbcShape7.points[6][0], bbcShape7.points[6][1]);
ctx.lineTo(bbcShape7.points[7][0], bbcShape7.points[7][1]);
ctx.lineTo(bbcShape7.points[8][0], bbcShape7.points[8][1]);
ctx.lineTo(bbcShape7.points[9][0], bbcShape7.points[9][1]);
ctx.lineTo(bbcShape7.points[10][0], bbcShape7.points[10][1]);
ctx.lineTo(bbcShape7.points[11][0], bbcShape7.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape8.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape8.points[0][0], bbcShape8.points[0][1]);
ctx.lineTo(bbcShape8.points[1][0], bbcShape8.points[1][1]);
ctx.lineTo(bbcShape8.points[2][0], bbcShape8.points[2][1]);
ctx.lineTo(bbcShape8.points[3][0], bbcShape8.points[3][1]);
ctx.lineTo(bbcShape8.points[4][0], bbcShape8.points[4][1]);
ctx.lineTo(bbcShape8.points[5][0], bbcShape8.points[5][1]);
ctx.lineTo(bbcShape8.points[6][0], bbcShape8.points[6][1]);
ctx.lineTo(bbcShape8.points[7][0], bbcShape8.points[7][1]);
ctx.lineTo(bbcShape8.points[8][0], bbcShape8.points[8][1]);
ctx.lineTo(bbcShape8.points[9][0], bbcShape8.points[9][1]);
ctx.lineTo(bbcShape8.points[10][0], bbcShape8.points[10][1]);
ctx.lineTo(bbcShape8.points[11][0], bbcShape8.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape9.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape9.points[0][0], bbcShape9.points[0][1]);
ctx.lineTo(bbcShape9.points[1][0], bbcShape9.points[1][1]);
ctx.lineTo(bbcShape9.points[2][0], bbcShape9.points[2][1]);
ctx.lineTo(bbcShape9.points[3][0], bbcShape9.points[3][1]);
ctx.lineTo(bbcShape9.points[4][0], bbcShape9.points[4][1]);
ctx.lineTo(bbcShape9.points[5][0], bbcShape9.points[5][1]);
ctx.lineTo(bbcShape9.points[6][0], bbcShape9.points[6][1]);
ctx.lineTo(bbcShape9.points[7][0], bbcShape9.points[7][1]);
ctx.lineTo(bbcShape9.points[8][0], bbcShape9.points[8][1]);
ctx.lineTo(bbcShape9.points[9][0], bbcShape9.points[9][1]);
ctx.lineTo(bbcShape9.points[10][0], bbcShape9.points[10][1]);
ctx.lineTo(bbcShape9.points[11][0], bbcShape9.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape10.rotation * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(bbcShape10.points[0][0], bbcShape10.points[0][1]);
ctx.lineTo(bbcShape10.points[1][0], bbcShape10.points[1][1]);
ctx.lineTo(bbcShape10.points[2][0], bbcShape10.points[2][1]);
ctx.lineTo(bbcShape10.points[3][0], bbcShape10.points[3][1]);
ctx.lineTo(bbcShape10.points[4][0], bbcShape10.points[4][1]);
ctx.lineTo(bbcShape10.points[5][0], bbcShape10.points[5][1]);
ctx.lineTo(bbcShape10.points[6][0], bbcShape10.points[6][1]);
ctx.lineTo(bbcShape10.points[7][0], bbcShape10.points[7][1]);
ctx.lineTo(bbcShape10.points[8][0], bbcShape10.points[8][1]);
ctx.lineTo(bbcShape10.points[9][0], bbcShape10.points[9][1]);
ctx.lineTo(bbcShape10.points[10][0], bbcShape10.points[10][1]);
ctx.lineTo(bbcShape10.points[11][0], bbcShape10.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}


window.onload = function() {
    var canvas = document.getElementById('bbcCanvas');
    var ctx = canvas.getContext('2d');
    
ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.rect(50.0, 50.0, 50.0, 150.0);
ctx.fill();
ctx.stroke();

}

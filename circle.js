
window.onload = function() {
    var canvas = document.getElementById('bbcCanvas');
    var ctx = canvas.getContext('2d');
    
ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.beginPath();
ctx.arc(50.0, 50.0, 100.0, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

}

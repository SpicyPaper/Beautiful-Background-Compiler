
window.onload = function() {
    var canvas = document.getElementById('bbcCanvas');
    var ctx = canvas.getContext('2d');
    
ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.beginPath();
ctx.arc(100.0, 100.0, 50.0, 0, 2 * Math.PI);
ctx.fill();

}

var canvas = document.querySelector('canvas')
    ;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c = context

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(200, 400, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(300, 300, 50, 50);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(500, 200);
c.lineTo(250, 200);
c.lineTo(250, 390);
c.lineTo(500, 390);
c.lineTo(500, 200);
c.strokeStyle = "#fa34a3";
c.stroke();

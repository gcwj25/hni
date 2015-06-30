var canvas, context, divCanvas;
var testHeight = 511;
var testWidth = 1024;

function init() {
    divCanvas = document.getElementById('responsive');
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    resizeCanvas();
    draw();
    window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas() {
    canvas.width = divCanvas.clientWidth;
    canvas.height = divCanvas.clientHeight;
    draw();
}

function draw() {
    var height = divCanvas.clientHeight / testHeight;
    context.fillStyle = '#5C1F00';
    roundedRect(context, 0, 440 * height, canvas.width, 20, 10, true);
    console.log("window = " + divCanvas.clientWidth + " (width) x " + divCanvas.clientHeight + " (height)\n" + 440*height);
}

function roundedRect(ctx, x, y, width, height, radius, fill, stroke) {
   ctx.beginPath();
   // draw top and top right corner
   ctx.moveTo(x+radius,y);
   ctx.arcTo(x+width,y,x+width,y+radius,radius);
   // draw right side and bottom right corner
   ctx.arcTo(x+width,y+height,x+width-radius,y+height,radius);
   // draw bottom and bottom left corner
   ctx.arcTo(x,y+height,x,y+height-radius,radius);
   // draw left and top left corner
   ctx.arcTo(x,y,x+radius,y,radius);
   if(fill) {
      ctx.fill();
   }
   if(stroke){
      ctx.stroke();
   }
}

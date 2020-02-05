var mcbwidth = document.body.clientWidth;
var mcbheight = document.body.clientHeight;

var canvas = document.getElementById('canvas');
canvas.width = mcbwidth;
canvas.height = mcbheight;
var ctx = canvas.getContext('2d');
var mousedown=false;


var bw = mcbwidth/5;

var x = mcbwidth/2-bw/2;
var y = mcbheight/2;

ctx.fillStyle='rgb(100,100,100)';
ctx.fillRect(mcbwidth/2-bw/2,mcbheight/2-2,bw,4);

ctx.fillStyle='rgb(200,200,200)';
ctx.lineWidth=5;

function draw(x,y){
  ctx.clearRect(0,0,mcbwidth,mcbheight);
  ctx.fillRect(mcbwidth/2-bw/2,mcbheight/2-2,bw,4);
  ctx.beginPath();
  ctx.arc(x,y,20,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
}

canvas.onmousedown=function(){
  mousedown=true;
}
canvas.onmouseup=function(){
  mousedown=false;
}

document.onmousemove=function(event){
  if(mousedown){
    draw(event.offsetX,event.offsetY);
  }
}

draw(x,y);

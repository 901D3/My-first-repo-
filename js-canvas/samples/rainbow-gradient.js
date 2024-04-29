function generateCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  
  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //rainbow gradient
  const rainbow = ctx.createLinearGradient(0, 0, 1280, 0);
  rainbow.addColorStop(0.0, "#ff0000");
  rainbow.addColorStop(0.1, "#ff8000");
  rainbow.addColorStop(0.2, "#ffff00");
  rainbow.addColorStop(0.3, "#80ff00");
  rainbow.addColorStop(0.4, "#00ff80");
  rainbow.addColorStop(0.5, "#00ffff");
  rainbow.addColorStop(0.6, "#0080ff");
  rainbow.addColorStop(0.7, "#0000ff");
  rainbow.addColorStop(0.8, "#8000ff");
  rainbow.addColorStop(0.9, "#ff00ff");
  rainbow.addColorStop(1.0, "#ff0000");

  ctx.fillStyle = rainbow;
  ctx.fillRect(0, 0, 1280, 720);
}

//call function
generateCanvas();

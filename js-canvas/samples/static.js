function generateCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //for refresh the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var imageData = ctx.createImageData(canvas.width, canvas.height);
  var data = imageData.data;

  for (var i = 0; i < data.length; i += 4) {
    var random = Math.floor(Math.random() * 256);
    //red value
    data[i + 0] = random;
    //green value
    data[i + 1] = random;
    //blue value
    data[i + 2] = random;
    //opacity value
    data[i + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
}
//call function
generateCanvas();

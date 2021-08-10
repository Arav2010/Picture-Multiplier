let img;
function preload()
{
  img=loadImage('controller.png');
  image.resize(1,1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, mouseX, mouseY);
}


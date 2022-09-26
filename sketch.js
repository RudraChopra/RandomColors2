var ball;
function setup() {
  createCanvas(500, 600);

  ball = createSprite(210,200,50,50)
  ball.shapeColor = "gold"
}

function draw() {
  background("cyan");

  if(keyDown("left")){

    ball.x = ball.x - 5;
    background("green");

  }

  if(keyDown("right")){

    ball.x = ball.x + 5;
    background("blue");

  }

  if(keyDown("up")){

    ball.y = ball.y - 5;
    background("yellow");

  }

  if(keyDown("down")){

    ball.y = ball.y + 5;
    background("red");

  }


  drawSprites();
}
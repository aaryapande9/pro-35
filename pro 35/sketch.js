//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
	//load images here
  dog =loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  background(46,139,87);

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog);
  }
  
}


function draw() {  

  drawSprites();
  //add styles here
  textSize(30)
  fill (10)
  stroke (30)
  text("FoodStock:",400,300);

}




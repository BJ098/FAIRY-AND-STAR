var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairy_ani;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	starImg1 = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairy_ani = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	BGsound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    BGsound.loop();

	//create fairy sprite and add animation for fairy
    fairy = createSprite(200,500,50,50);
	fairy.addAnimation("fI",fairy_ani);
	fairy.scale = 0.15;

	star = createSprite(650,30);
	star.addImage(starImg1);
	star.scale = 0.05;

	star1 = createSprite(50,30);
	star1.addImage(starImg);
	star1.scale = 0.04;

	star2 = createSprite(250,50);
	star2.addImage(starImg);
	star2.scale = 0.1;

	star3 = createSprite(400,25);
	star3.addImage(starImg);
	star3.scale = 0.04;

	star4 = createSprite(610,15);
	star4.addImage(starImg);
	star4.scale = 0.08;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 450 && starBody.position.y > 465){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}
}

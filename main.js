img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
GameStatus ="";
function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "game is loading..."
}

function preload()
{
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

  img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,400);
	video.parent('game_console');
	poseNet =ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded! :p');
}

function draw() {
	
	game();
  background("#D3D3D3");
  if(noseX<300)
  {
	  marioX = marioX-1
  }
  if(noseX>300)
  {
	  marioX = marioX+1
  }
  if(noseY<150)
	{
		marioY = marioY-1
	}
	if(noseY>150)
	{
		marioY = marioY+1
	}
  image(img,marioX, marioY, 40,70);
}
function gotPoses (results)
{
	if(results.length>0)
	{
	noseX=results[0].poses.nose.x
	noseY=results[0].poses.nose.y
	console.log("noseX=" + noseX +  "noseY=" + noseY );
	}

}








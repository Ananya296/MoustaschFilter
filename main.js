NoseX = 0;
NoseY = 0;

function preload()
{
  Moustache = loadImage("https://i.postimg.cc/5tJcF4hf/Moustache.png");
}

function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, posenetLoaded);
    poseNet.on('pose', gotPoses);

}

function posenetLoaded()
{
    console.log("Posenet loaded !")
}

function draw()
{
    image(video, 0,0, 300, 300);
    image(Moustache, NoseX, NoseY, 100, 100);
}

function take_snapshot()
{
    save("PhotoWithMoustache.jpg");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      NoseX =  results[0].pose.nose.x - 43;
      NoseY =  results[0].pose.nose.y - 10;
      console.log("Nose x = " + NoseX);
      console.log("Nose y = " + NoseY);
  }
}
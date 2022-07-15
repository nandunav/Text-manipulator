noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500)
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('MODEL LOADED');
}

function draw()
{
   background('#7705a8');
   document.getElementById("text_span").innerHTML + "Width and Height of a text will be : " + difference + "px";
   fill('#d58cf5');
   textSize(70);
   text("Nandana", 20, 50, difference);
}

function gotPoses(results)
{
   if(results.length > 0)
{
   console.log(results);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;

   console.log("noseX = " + noseX + "noseY = " + noseY);

   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX - rightWristX);
   console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

}
}
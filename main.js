nose_X=0;
nose_Y=0;
function preload()
{
mustache_nose=loadImage('https://i.postimg.cc/gc68qcVv/Mustache.png');
}

function setup()
{
canvas = createCanvas(300 , 300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300, 300);
poseNet=ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
image(video , 0 , 0 , 300 , 300)
}

function take_snapshot()
    {
    save("mustache.png");
}

function modelLoaded()
{
console.log("poseNet is Initialized");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
nose_X=results[0].pose.nose.x-30;
nose_Y=results[0].pose.nose.y-30;
console.log("nose x = " +nose_X);
console.log("nose y = " +nose_Y);
}
}
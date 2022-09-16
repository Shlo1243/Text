NoseX=0;
NoseY=0;
Difference=0;
RightWristX=0;
LeftWristX=0;

function setup (){
    video=createCapture(VIDEO);
    video.size(450,450);
    canvas=createCanvas(400,350);
    canvas.position(600,280);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}

function draw (){
    background("#7b93f0");

    fill("#006351");
    stroke("#000000");
    textSize(Difference);
    text("Katana",NoseX,NoseY);
}

function modelLoaded (){
    console.log("Model Loaded Successfully!!");
}

function gotResults (result){
if (result.length > 0){
    console.log(result)
    NoseX=result[0].pose.nose.x;
    NoseY=result[0].pose.nose.y;

    LeftWristX=result[0].pose.leftWrist.x;
    RightWristX=result[0].pose.rightWrist.x;
    Difference=Math.floor(LeftWristX - RightWristX);
}
}
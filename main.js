song = "";
song2 = "";
status_song = 1;
leftWristX = 0;
scorerightWristX = 0;
leftWristY = 0;
rightWristY = 0; 
scoreLeftWrist = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function ModelLoaded() {
    console.log("poseNet is initilaized");

}

function draw() {
    image(video, 0, 0, 600, 500);
    
    console.log(song2);
    fill("#fc030b");
    stroke("#fc030b");
    if(scoreLeftWrist > 0.2) {
        circle(scoreleftWristX, leftWristY, 20);
        song.stop();
        if(song2 == false) {
            song2.play();
            document.getElementById("song").innerHTML = "Song Name : peter pan";
        }
        
           
        
     
    }
   if(scorerightWristX > 0.2) {
    circle(rightWristX, rightWristY, 20);
  song2.stop();
  if(song1 == false) {
    song1.play();
    document.getElementById("song").innerHTML = "Song Name: harry potter";
  }
   }

    }


function play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}

function gotPoses(results) {
    if(results > 0) {
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreleftWristX = results[0].pose.rightWrist.x;
    console.log("Left wristx" + leftWristX);
scorerightWristX = results[0].pose.keypoints[10].score;
    scorerightWristX = results[0].pose.rightWrist.x;
    console.log("right wristx" + rightWristX);
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left wristy" + leftWristY);
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wristy" + leftWristY);
    }
}
lwx = 0
lwy = 0

rwx = 0
rwy = 0
function preload() {
    song = loadSound('music.mp3')
}

function playOne() {
    song.play()
    song.setVolume(1);
    song.rate(1);
}

function setup() {
    canvas = createCanvas (350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 350, 300)
}

function modelLoaded() {
    console.log("model is loaded successfully!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
    }
}
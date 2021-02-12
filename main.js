function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(0,255,0);
    stroke(0,0,0);
    rect(10,0,30,300);
    rect(10,0,300,30);
    rect(270,0,30,300);
    rect(10,270,300,30);
    fill(255,0,0);
    circle(20,14,50);
    circle(280,14,50);
    circle(20,284,50);
    circle(283,281,50);
    image(video,35,30,240,240);
}
function take_snapshot(){
    save('MeInAFrame');
}
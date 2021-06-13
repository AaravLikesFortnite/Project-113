function preload(){

}

function setup(){
    canvas=createCanvas(500,450);
    canvas.position(400,150);
    video=createCapture(VIDEO);

    video.hide();
}

function draw(){
    image(video,50,50,400,350);
    circle(27,27,50);
    circle(473,27,50);
    circle(27,423,50);
    circle(473,423,50);
}

function take_snapshot(){
    save('VirtualPictureFrame');
}
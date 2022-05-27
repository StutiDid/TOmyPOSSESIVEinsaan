song="";

function preload (){
    song = loadSound("123.m4a");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

function play(){
    song.play();
}
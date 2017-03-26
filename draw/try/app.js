function setup(){
    createCanvas(600,400);
    background(0);
    fill(255);
    //stroke(255);
}

function mouseDragged(){

    ellipse(mouseX, mouseY, 30);
}
function setup(){
    createCanvas(600, 400);
    background(51);
    textSize(12);
    let exampleLayer = new Layer(
        [
            createVector(0, 0),
            createVector(400,200)
        ],
        "Hello World",
        "text"
    );
    exampleLayer.draw();
    exampleLayer.drawBorder();
}


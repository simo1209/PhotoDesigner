let currentEl;
let layers = new Array();
let uiObjects = {};
let currentBG = "#000000";

function containCoords(corners, coords) {
    return corners[0].x <= coords.x && corners[0].y <= coords.y && corners[1].x >= coords.x && corners[1].y >= coords.y;
}

function canvasResize() {
    //resizeCanvas(500,200);
    resizeCanvas(uiObjects.canvasWidth.value(),uiObjects.canvasHeight.value());
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }
    //resizeCanvas();
}

function setup() {


    uiObjects.canvas = createCanvas(600, 400);
    uiObjects.canvasDiv = createDiv("");
    uiObjects.canvasWidth = createInput(width).input(canvasResize).parent(uiObjects.canvasDiv);
    uiObjects.canvasHeight = createInput(height).input(canvasResize).parent(uiObjects.canvasDiv);
    background(currentBG);
    textSize(48);
    textAlign(CENTER, CENTER);

    /*let inpTxt="Hello World";
    currentEl = new Layer(
        [
            createVector(width/2-textWidth(inpTxt)/2,height/2-textSize()/2),
            createVector(width/2+textWidth(inpTxt)/2,height/2+textSize()/2)
        ],
        inpTxt,
        "text"
    );
    
    currentEl.draw();*/
    //layers.push(currentEl);
}

function draw() {

}

function mousePressed() {
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
        if (
            layers[i].getUpperCorner().x <= mouseX &&
            layers[i].getDownCorner().x >= mouseX &&
            layers[i].getUpperCorner().y <= mouseY &&
            layers[i].getDownCorner().y >= mouseY
        ) {
            currentEl = layers[i];
            currentEl.drawBorder();
        }
    }
}

function mouseDragged() {
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
        if (
            containCoords([layers[i].getUpperCorner(), layers[i].getDownCorner()], createVector(mouseX, mouseY))
        ) {
            currentEl = layers[i];
            currentEl.setCenter(
                createVector(mouseX, mouseY)
            );
            currentEl.drawBorder();
        }
    }
}


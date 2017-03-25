let currentEl;
let layers = new Array();
let uiObjects = {};
let currentBG = "#000000";

function containCoords(corners, coords) {
    return corners[0].x <= coords.x && corners[0].y <= coords.y && corners[1].x >= coords.x && corners[1].y >= coords.y;
}

function canvasResize() {
    //resizeCanvas(500,200);
    resizeCanvas(uiObjects.canvasWidth.value(), uiObjects.canvasHeight.value());
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }
    //resizeCanvas();
}


function onTextChange() {
    background(currentBG);

    currentEl.setData(uiObjects.textInp.value());

    currentEl.setCorners([
        createVector(currentEl.getCenter().x - textWidth(this.value() / 2), currentEl.getCenter().y - textSize() / 2),
        createVector(currentEl.getCenter().x + textWidth(this.value() / 2), currentEl.getCenter().y + textSize() / 2)
    ]);

    currentEl.draw();
}

function onTextAdd() {
    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );

    if (!uiObjects.textInp) {
        uiObjects.textInp = createInput("Enter text").input(onTextChange).parent(uiObjects.AsideDiv);
    }

    currentEl = new Layer(
        [
            createVector(width / 2 - textWidth(uiObjects.textInp.value()), height / 2 - textSize() / 2),
            createVector(width / 2 + textWidth(uiObjects.textInp.value()), height / 2 + textSize() / 2)
        ],
        uiObjects.textInp.value(),
        "text"
    );
    layers.push(currentEl);

}




function canvasChangeBG() {
    currentBG = this.value();
    background(currentBG);
}

function setup() {


    uiObjects.canvas = createCanvas(600, 400);
    uiObjects.canvasResizeDiv = createDiv("");
    uiObjects.AsideDiv = createDiv("").position(width * 101 / 100, 0);
    uiObjects.canvasBG = createInput(currentBG, "color").mousePressed(canvasChangeBG).parent(uiObjects.AsideDiv);

    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );

    uiObjects.buttonAdd = createButton("Create text").mousePressed(onTextAdd).parent(uiObjects.AsideDiv);


    uiObjects.canvasWidth = createInput(width).input(canvasResize).parent(uiObjects.canvasResizeDiv);

    createSpan("X").parent(
        uiObjects.canvasResizeDiv
    );

    uiObjects.canvasHeight = createInput(height).input(canvasResize).parent(uiObjects.canvasResizeDiv);
    background(currentBG);
    textSize(48);
    textAlign(CENTER, CENTER);

    /*let inpcurrentEl="Hello World";
    currentEl = new Layer(
        [
            createVector(width/2-textWidth(inpcurrentEl)/2,height/2-textSize()/2),
            createVector(width/2+textWidth(inpcurrentEl)/2,height/2+textSize()/2)
        ],
        inpcurrentEl,
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


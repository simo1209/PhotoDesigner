let currentEl;
let layers = new Array();
let uiObjects = {};
let currentBG = "#000000";

function containCoords(corners, coords) {
    return corners[0].x <= coords.x && corners[0].y <= coords.y && corners[1].x >= coords.x && corners[1].y >= coords.y;
}



function setup() {


    uiObjects.canvas = createCanvas(600, 400);
    uiObjects.canvasResizeDiv = createDiv("");
    uiObjects.AsideDiv = createDiv("").position(width * 101 / 100, 0);
    uiObjects.canvasBG = createInput(currentBG, "color").input(canvasChangeBG).parent(uiObjects.AsideDiv);

    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );

    uiObjects.buttonAdd = createButton("Create text").mousePressed(onTextAdd).parent(uiObjects.AsideDiv);

    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );

    uiObjects.fileAdd = createFileInput(fileGet).parent(
        uiObjects.AsideDiv
    );

    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );


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




function canvasResize() {
    //resizeCanvas(500,200);
    resizeCanvas(uiObjects.canvasWidth.value(), uiObjects.canvasHeight.value());
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }
    uiObjects.AsideDiv.position(width * 101 / 100, 0);
    //resizeCanvas();
}








function canvasChangeBG() {
    currentBG = uiObjects.canvasBG.value();
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }
}
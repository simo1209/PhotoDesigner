function mousePressed() {
    //background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
        if (
            containCoords([layers[i].getUpperCorner(), layers[i].getDownCorner()], createVector(mouseX, mouseY))
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
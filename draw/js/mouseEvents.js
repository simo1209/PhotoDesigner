function mousePressed() {

    

    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
        if (
            containCoords([layers[i].getUpperCorner(), layers[i].getDownCorner()], createVector(mouseX, mouseY))
        ) {
            
            currentEl = layers[i];
            currentEl.drawBorder();
            
            if(currentEl.getType()=="text"){
                
                uiObjects.sliderW.hide();
                uiObjects.sliderH.hide();
                
                
                uiObjects.textInp.show().value(currentEl.getData());
                uiObjects.textSiz.show();
            }else if(currentEl.getType()=="image"){
                uiObjects.sliderW.show().value(currentEl.lengths.x);
                uiObjects.sliderH.show().value(currentEl.lengths.y);
                uiObjects.textInp.hide();
                uiObjects.textSiz.hide();
            }


        }
    }
}

function mouseDragged() {
    background(currentBG);
    /*if (usePencil) {
        fill(pencilColor);
        stroke(pencilColor);
        ellipse(mouseX, mouseY, parseInt(pencilSize));
    } */

    //background(currentBG);
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
function fileGet(f) {
    background(currentBG);
    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }
    var img = createImg(f.data);


    img.hide();
    if (!uiObjects.sliderW && !uiObjects.sliderW) {
        uiObjects.sliderW = createSlider(
            img.width / 10,
            img.width,
            img.width,
            img.width / 10
        ).input(sliderChange);
        uiObjects.sliderH = createSlider(
            img.height / 10,
            img.height,
            img.height,
            img.height / 10
        ).input(sliderChange);


        uiObjects.sliderW.parent(
            uiObjects.AsideDiv
        );
        createSpan("<br>").parent(
            uiObjects.AsideDiv
        );

        uiObjects.sliderH.parent(
            uiObjects.AsideDiv
        );
        createSpan("<br>").parent(
            uiObjects.AsideDiv
        );
    }

    currentEl = new Layer(
        [
            createVector(width / 2 - img.width / 2, height / 2 - img.height / 2),
            createVector(width / 2 + img.width / 2, height / 2 + img.height / 2)
        ],
        img,
        "image"
    );
    layers.push(currentEl);

    currentEl.draw();
    currentEl.drawBorder();
    //image(img, 0, 0, width, height);
}

function sliderChange() {
    //console.log(this.value());
    background(currentBG);
    stroke(0);
    fill(currentBG);
    //rect(0, 0, width - 1, height - 1);


    //console.log(sliderW, sliderH);
    if (currentEl) {

        //txt.draw();
        //background(clr);
        currentEl.setDownCorner(createVector(currentEl.getUpperCorner().x + uiObjects.sliderW.value(), currentEl.getUpperCorner().y + uiObjects.sliderH.value()));
    }


}
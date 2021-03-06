function onTextChange() {
    background(currentBG);


    currentEl.setData(uiObjects.textInp.value());

    currentEl.setCorners([
        createVector(currentEl.getCenter().x - textWidth(this.value()) / 2, currentEl.getCenter().y - textSize() / 2),
        createVector(currentEl.getCenter().x + textWidth(this.value()) / 2, currentEl.getCenter().y + textSize() / 2)
    ]);


    //currentEl.draw();

    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();

    }

    uiObjects.sliderW.hide();
    uiObjects.sliderH.hide();
}

function onTextAdd() {

    

    background(currentBG);

    for (let i = 0; i < layers.length; i++) {
        layers[i].draw();
    }

    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );

    if (!uiObjects.textInp && !uiObjects.textSiz) {
        createSpan("<br>").parent(
            uiObjects.AsideDiv
        );
        uiObjects.textInp = createInput("Enter text").input(onTextChange).parent(uiObjects.AsideDiv);

        createSpan("<br>").parent(
            uiObjects.AsideDiv
        );
        uiObjects.textSiz = createInput("48").size(30).input(function () {
            textSize(this.value());

            background(currentBG);

            for (let i = 0; i < layers.length; i++) {
                layers[i].draw();
            }
        }).parent(uiObjects.AsideDiv);




    }

    //Create centered text layer
    currentEl = new Layer(
        [
            createVector(width / 2 - textWidth(uiObjects.textInp.value()) / 2, height / 2 - textSize() / 2),
            createVector(width / 2 + textWidth(uiObjects.textInp.value()) / 2, height / 2 + textSize() / 2)
        ],
        uiObjects.textInp.value(),
        "text"
    );
    layers.push(currentEl);


    uiObjects.sliderW.hide();
    uiObjects.sliderH.hide();
}


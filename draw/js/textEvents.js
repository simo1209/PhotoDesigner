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
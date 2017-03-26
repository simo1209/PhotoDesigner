let currentEl;
let layers = new Array();
let uiObjects = {};
let currentBG = "#000000";
let usePencil = false;
let pencilSize = 12;
let pencilColor = "#FFFFFF";

function containCoords(corners, coords) {
    return corners[0].x <= coords.x && corners[0].y <= coords.y && corners[1].x >= coords.x && corners[1].y >= coords.y;
}

function newLine() {
    createSpan("<br>").parent(
        uiObjects.AsideDiv
    );
}



function setup() {

    uiObjects.full=createDiv("").id("primaryDiv");
    uiObjects.canvas = createCanvas(600, 400).parent(uiObjects.full);
    uiObjects.canvasResizeDiv = createDiv("").parent(uiObjects.full);
    uiObjects.AsideDiv = createDiv("").position(width * 101 / 100, 0).parent(uiObjects.full);
    uiObjects.canvasBG = createInput(currentBG, "color").input(canvasChangeBG).parent(uiObjects.AsideDiv);

    newLine();

    uiObjects.buttonAdd = createButton("Create text").mousePressed(onTextAdd).parent(uiObjects.AsideDiv);

    newLine();

    uiObjects.fileAdd = createFileInput(fileGet).parent(
        uiObjects.AsideDiv
    );

    newLine();


    uiObjects.canvasWidth = createInput(width).input(canvasResize).parent(uiObjects.canvasResizeDiv);

    createSpan("X").parent(
        uiObjects.canvasResizeDiv
    );

    uiObjects.canvasHeight = createInput(height).input(canvasResize).parent(uiObjects.canvasResizeDiv);



    //send the image in base64
    uiObjects.sendImage = createButton("Save image").mousePressed(() => {
        //console.log();
        $.ajax({
            type: "POST",
            url: "/save",
            data: uiObjects.canvas.elt.toDataURL(),
            success: (data) => {
                console.log(data);

            }
        });

    }).parent(uiObjects.AsideDiv);

    newLine();
    /*
        uiObjects.pencil = createButton("Pencil").mousePressed(() => {
            usePencil = !usePencil;
        }).parent(uiObjects.AsideDiv);
    
    
        uiObjects.pencilResizer = createInput("Size").input(() => {
            pencilSize = uiObjects.pencilResizer.value();
        }).parent(uiObjects.AsideDiv);
    
        uiObjects.pencilColor=createInput(invertHex(currentBG), "color").input(()=>{
            pencilColor=uiObjects.pencilColor.value();
        }).parent(uiObjects.AsideDiv);*/



    background(currentBG);
    textSize(48);
    textAlign(CENTER, CENTER);


}

//Ready functions
function invertHex(hexnum) {
    hexnum = hexnum.substring(1);
    //console.log(hexnum);

    if (hexnum.length != 6) {
        //alert("Hex color must be six hex numbers in length.");
        return false;
    }

    hexnum = hexnum.toUpperCase();
    var splitnum = hexnum.split("");
    var resultnum = "";
    var simplenum = "FEDCBA9876".split("");
    var complexnum = new Array();
    complexnum.A = "5";
    complexnum.B = "4";
    complexnum.C = "3";
    complexnum.D = "2";
    complexnum.E = "1";
    complexnum.F = "0";

    for (i = 0; i < 6; i++) {
        if (!isNaN(splitnum[i])) {
            resultnum += simplenum[splitnum[i]];
        } else if (complexnum[splitnum[i]]) {
            resultnum += complexnum[splitnum[i]];
        } else {
            //alert("Hex colors must only include hex numbers 0-9, and A-F");
            return false;
        }
    }

    return '#' + resultnum;
}


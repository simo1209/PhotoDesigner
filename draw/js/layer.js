class Layer{
    constructor(corners,data,type){
        this.data=data;
        this.upperCorner=corners[0];
        this.downCorner=corners[1];
        this.type=type;
        //this.lengths = p5.Vector.add(this.firstCorner, this.secondCorner);
    }

    getData(){
        return this.data;
    }

    setData(data){
        this.data=data;
    }

    getCorners(){
        return new Array(this.upperCorner,this.downCorner);
    }

    setCorners(corners){
        this.upperCorner=corners[0];
        this.downCorner=corners[1];
    }

    getUpperCorner(){
        return this.upperCorner;
    }

    setUpperCorner(corner){
        this.upperCorner=corner;
    }

    getDownCorner(){
        return this.downCorner;
    }

    setDownCorner(corner){
        this.downCorner=corner;
    }

    draw(){
        switch (this.type){
            case "text":
                //this.lengths = p5.Vector.add(this.firstCorner, this.secondCorner);
                fill(255);
                text(this.data,this.upperCorner.x,this.upperCorner.y,this.downCorner.x,this.downCorner.y);
                break;
            case "image":
                imageMode(CORNERS);
                image(
                    this.data, 
                    this.upperCorner.x,
                    this.upperCorner.y,
                    this.downCorner.x,
                    this.downCorner.y
                );
                break;
        }
    }

    drawBorder(){
        rectMode(CORNERS);
        fill(0, 0, 0, 0);
        stroke(255);
        rect(
            this.upperCorner.x, 
            this.upperCorner.y, 
            this.downCorner.x, 
            this.downCorner.y
        );
    }
}
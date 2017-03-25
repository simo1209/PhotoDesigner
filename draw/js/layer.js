class Layer{
    constructor(corners,data,type){
        this.data=data;
        this.upperCorner=corners[0];
        this.downCorner=corners[1];
        this.type=type;
        this.lengths = p5.Vector.add(corners[0], corners[1]);
    }

    

    getData(){
        return this.data;
    }

    getCenter(){
        this.lengths = p5.Vector.add(this.getUpperCorner(), this.getDownCorner());
        return p5.Vector.div(this.lengths,2);
    }

    setCenter(center){
        this.lengths = p5.Vector.sub(this.getDownCorner(), this.getUpperCorner());
         
        this.setCorners([
            createVector(center.x - this.lengths.x / 2, center.y - this.lengths.y / 2),
            createVector(center.x + this.lengths.x / 2, center.y + this.lengths.y / 2)
        ]);
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
                this.lengths = p5.Vector.sub(this.getDownCorner(), this.getUpperCorner());
                fill(255);
                text(this.getData(),this.getCenter().x,this.getCenter().y);
                break;
            case "image":
                imageMode(CORNERS);
                image(
                    this.data, 
                    this.getUpperCorner().x,
                    this.getUpperCorner().y,
                    this.getDownCorner().x,
                    this.getDownCorner().y
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
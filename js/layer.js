class Layer{
    constructor(corners,data){
        this.data=data;
        this.upperCorner=corners[0];
        this.downCorner=corners[1];
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


}
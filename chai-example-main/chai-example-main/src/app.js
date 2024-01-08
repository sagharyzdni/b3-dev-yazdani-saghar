class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Panier{
    constructor(){
        this.article = [];
        this.montant = 0;
    }

    addArticle(article,montant){
        this.article.push(article);
        this.montant += montant;
    }

    removeArticle(article,montant){
        this.article.pop(article);
        this.montant =this.montant -montant;
    }
}

class Coupon {
    constructor( montantMin, remise){
        this.montantMin = montantMin;
        this.remise = remise;
        this.montant = 0;
    }

    appliquer(montant){
        if(montant >= this.montantMin){
            this.montant = montant - this.remise;
        }
    }


}




module.exports = {
    Cube:Cube,
    Panier:Panier,
    Coupon: Coupon,
}
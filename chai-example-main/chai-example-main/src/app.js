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

    removeArticle(artice,montant){
        this.article.pop(artice);
        this.montant =this.montant;
    }

}




module.exports = {
    Cube:Cube,
    Panier:Panier
}
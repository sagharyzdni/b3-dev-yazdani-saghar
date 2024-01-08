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




module.exports = {
    Cube:Cube,
    Panier:Panier
}
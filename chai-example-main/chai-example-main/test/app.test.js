const Cube = require('../src/app').Cube;
const Panier = require('../src/app').Panier;
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    }); 
});

describe('Testing the panier functions', function(){

    it('1.Ajout' , function(){
        const panier = new Panier()
        panier.addArticle('article1', 30);
        assert.equal(panier.article.length, 1, 'Le nombre d\'articles doit être 1');
        assert.equal(panier.montant, 30, 'Le montant doit etre egale à 30');
    });

    it('1.suppression' , function(){
        const panier = new Panier()
        panier.removeArticle('article1', 30);
        assert.equal(panier.article.length, 0, 'Le nombre d\'articles doit être 0');
        assert.equal(panier.montant, 0, 'Le montant doit etre egale à 0');
    });

});
    

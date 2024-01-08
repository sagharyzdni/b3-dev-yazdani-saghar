
const Cube = require('../src/app').Cube;
const Panier = require('../src/app').Panier;
const Coupon = require('../src/app').Coupon;
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
        panier.addArticle('article2', 30);
        assert.equal(panier.article.length, 2, 'Le nombre d\'articles doit être 1');
        assert.equal(panier.montant, 60, 'Le montant doit etre egale à 30');
    
    
       
        panier.removeArticle('article2', 30);
        assert.equal(panier.article.length, 1, 'Le nombre d\'articles doit être 1');
        assert.equal(panier.montant, 30, 'Le montant doit etre egale à 30');
    });

});

describe('Testing Coupon', function(){

    it('appiquer' , function(){
        const coupon = new Coupon(100,10)
        coupon.appliquer(110)
        assert.equal(coupon.montant,100, 'le montant doit etre egale a 100')
        
    
    });

});
    

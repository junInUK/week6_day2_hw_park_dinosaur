const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Triceratops','plant',30);
    park = new Park('meadow',5,[dinosaur1,dinosaur2]);
  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual,'meadow');
  });

  it('should have a ticket price',function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual,5);
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual,[dinosaur1,dinosaur2])
  });

  it('should be able to add a dinosaur to its collection',function(){
    dinosaur3 = new Dinosaur('Tyrannosaurus','meat',70);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepEqual(actual,[dinosaur1,dinosaur2,dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.removeDinosaurByName('Triceratops');
    const actual = park.dinosaurs;
    assert.deepEqual(actual,[dinosaur1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    const actual = park.findMostPopularDinosaur();
    assert.deepEqual(actual,dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species',function(){
    const actual = park.findDinosaursBySpecies('Triceratops');
    assert.deepEqual(actual,[dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day',function(){
    const actual = park.totalVisitors();
    assert.strictEqual(actual,80);
  });

  it('should be able to calculate the total number of visitors per year',function(){
    const actual = park.totalVisitorsByYear(2020);
    assert.strictEqual(actual,29280);
  });

  it('should be able to calculate total revenue for one year',function(){
    const actual = park.totalRevenueByYear(2020);
    assert.strictEqual(actual,146400);
  });

});

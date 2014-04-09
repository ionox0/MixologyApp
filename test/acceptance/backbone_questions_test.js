'use strict';
/*global casper*/

casper.test.begin('questions', 2, function suite(test) {

  casper.start('http://localhost/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle('Toastie', 'title is Toastie');
  });

  casper.then(function(){
    test.assertVisible('div.page', 'party answer is visible');
  });

  casper.then(function(){
    test.assertVisible('div.question', 'business answer is visible');
  });

  casper.then(function(){
    test.assertVisible('button.classy', 'classy answer is visible');
  });

  casper.then(function() {
    this.click('.party');
    console.log('click');
  });

  casper.then(function(){
    test.assertVisible('button.whiskey', 'whiskey answer is visible');
  });

  casper.then(function(){
    test.assertVisible('button.vodka', 'vodka answer is visible');
  });

  casper.then(function(){
    test.assertVisible('button.gin', 'gin answer is visible');
  });

  casper.then(function() {
    this.click('.whiskey');
    console.log('click');
  });

  casper.run(function(){
    test.done();
  });

});

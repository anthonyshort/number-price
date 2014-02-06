var price = require('number-price');
var assert = require('assert');

describe('price', function(){

  it('should get the correct prices', function(){

    assert( price(1).long() === '$1.00' );
    assert( price(1.5).long() === '$1.50' );
    assert( price(300000).long() === '$300,000.00' );
    assert( price(30000000).long() === '$30,000,000.00' );
    assert( price('30000000').long() === '$30,000,000.00' );
    assert( price('1.5').long() === '$1.50' );

    assert( price(1).short() === '$1' );
    assert( price(1.5).short() === '$1.50' );
    assert( price(300000).short() === '$300,000' );
    assert( price(30000000).short() === '$30,000,000' );
    assert( price(30000000.5).short() === '$30,000,000.50' );
    assert( price('30000000.5').short() === '$30,000,000.50' );

  });

});
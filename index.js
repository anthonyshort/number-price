function commas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = function(num, currency){

  // string -> number
  num = num * 1;

  function prefix(num) {
    return (currency || '$') + num;
  }

  return {
    long: function() {
      return prefix(commas(num.toFixed(2)));
    },
    short: function() {
      return this.long().replace('.00', '');
    }
  };
};


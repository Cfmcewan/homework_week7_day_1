const PubSub = require('../helpers/pub_sub.js');


const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const primeNumberCheck = event.detail;
    this.displayResult(primeNumberCheck);
  });
}

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Is your number a prime? ${result}`;
}

module.exports = ResultView;

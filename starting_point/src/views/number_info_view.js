const PubSub = require('../helpers/pub_sub.js');

const NumberInfoView = function(container) {
  this.container = container;
};

NumberInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Handler:number-object-ready', (evt) => {
    this.render(evt.detail);
  });
};

NumberInfoView.prototype.render = function(numberObject) {
  this.container.innerHTML = '';
  this.renderNumber(numberObject);
  this.renderNumberFact(numberObject);
};

NumberInfoView.prototype.renderNumber = function(numberObject) {
  const line = document.createElement('p');
  line.classList.add("bold");
  line.textContent = `Number: ${numberObject.number}`
  this.container.appendChild(line);
};

NumberInfoView.prototype.renderNumberFact = function (numberObject) {
  const line = document.createElement('p');
  line.classList.add("pink");
  line.classList.add("bold");
  line.textContent = `Fact: ${numberObject.text}`
  this.container.appendChild(line);

};

module.exports = NumberInfoView;

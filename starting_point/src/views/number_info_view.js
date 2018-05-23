const PubSub = require('../helpers/pub_sub.js');

const NumberInfoView = function(container) {
  this.container = container;
};

NumberInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Handler:number-object-ready', (evt) => {
    console.log(evt.detail);
  })
};

module.exports = NumberInfoView;

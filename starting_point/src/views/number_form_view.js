const PubSub = require('../helpers/pub_sub.js')

const NumberFormView = function (form) {
  this.form = form;
};

NumberFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

NumberFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  console.log('Number input on Form', evt.target.number.value);
  PubSub.publish('NumberFormView:submit', evt.target.number.value);
};

module.exports = NumberFormView;

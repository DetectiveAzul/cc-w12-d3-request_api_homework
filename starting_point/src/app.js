const Handler = require('./models/handler.js');
const NumberFormView = require('./views/number_form_view');
const NumberInfoView = require('./views/number_info_view');

console.log('JS loaded');

document.addEventListener('DOMContentLoaded', () => {
  //Handler
  const handler = new Handler();
  handler.bindEvents();

  //Form
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  //Info view
  const numberInfo = document.querySelector('#number-fact');
  const numberInfoView = new NumberInfoView(numberInfo);
  numberInfoView.bindEvents();

});

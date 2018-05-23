console.log('JS loaded');
const NumberFormView = require('./views/number_form_view');

document.addEventListener('DOMContentLoaded', () => {
  //Form
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  //Info view
  const numberInfo = document.querySelector('#number-fact');
  const numberInfoView = new NumberInfoView(numberInfo);
  numberFormView.bindEvents();
});

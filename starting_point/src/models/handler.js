const Request = require('../helpers/request.js')
const PubSub = require('../helpers/pub_sub.js')

const Handler = function() {
  this.numberToRequest = null;
};

Handler.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    this.numberToRequest = evt.detail;
  });
  this.requestToAPI();
};

Handler.prototype.requestToAPI = function () {
  request = new Request(`http://numbersapi.com/${this.numberToRequest}?json`);
//   request.get((data) => {
//     PubSub.publish('Handler:number-object-ready', data);
//   }
// };


module.exports = Handler;

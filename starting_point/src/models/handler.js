const Request = require('../helpers/request.js')
const PubSub = require('../helpers/pub_sub.js')

const Handler = function() {
};

Handler.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    this.requestToAPI(evt.detail);
  })
};

Handler.prototype.requestToAPI = function (number) {
  if (!number) return "";
  request = new Request(`http://numbersapi.com/${number}?json`);
  request.get((data) => {
    PubSub.publish('Handler:number-object-ready', data);
  });
};


module.exports = Handler;

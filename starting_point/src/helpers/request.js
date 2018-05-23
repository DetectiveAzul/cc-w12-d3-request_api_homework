const Request = function(url) {
  this.url = url;
};

Request.prototype.get = function(onComplete) {
  //Initiate the request
  const xhr = new XMLHttpRequest();

  //Set a listener which trigger once get the response
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }

    //If we receive a response, store the response on a variable
    const jsonString = xhr.responseText;
    //Turn the string into a JS object
    const data = JSON.parse(jsonString);
    //Run the callback using the data
    onComplete(data);

  });

  //Make the request
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

};


module.exports = Request;

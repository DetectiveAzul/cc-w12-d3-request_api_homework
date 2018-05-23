const Request = function(url) {
  this.url = url;
};

Request.prototype.get = function () {
  const xhr = new XMLHtmlRequest();

  xhr.addEventListener(onComplete) {
    if (xhr.status !== 200) {
      return ;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);
  }

  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
};


module.exports = Request;

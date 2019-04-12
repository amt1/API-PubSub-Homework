const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const InfoProcessor = function () {
  this.api_data = null;
};

InfoProcessor.prototype.fetchURLData = function (api_url) {
  const url_to_fetch = api_url;
  const request = new Request(url_to_fetch);
  request.get()
    .then( (apiData)=>{
      this.api_data = apiData;
      console.log(this.api_data);
      PubSub.publish('InfoProcessor:api-data-ready', this.api_data);
      console.log(this.api_data);
    });
};


module.exports = InfoProcessor;

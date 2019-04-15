const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const InfoProcessor = function () {
  this.apiData = [];
  this.authArray = [];
  this.selectors = [];
};


InfoProcessor.prototype.fetchURLData = function (api_url) {
  const url_to_fetch = api_url;
  const request = new Request(url_to_fetch);
  request.get()
    .then( (api_data)=>{
      this.apiData = api_data;
      PubSub.publish('InfoProcessor:api-data-ready', this.apiData);
      this.publishSelectorsList(this.apiData);
    });
};
// this looks wrong
InfoProcessor.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    // const selectedData = evt.detail;
    // this.publishSelectorsList(selectedData);
  })
};

InfoProcessor.prototype.publishSelectorsList = function (api_data) {
  this.apiData = api_data;
  this.authArray = this.getAuthTypesList();
  console.log('authArray', this.authArray);
  this.selectors['auth'] = this.authArray;
  PubSub.publish('InfoProcessor:selectors-ready', this.selectors);
};



InfoProcessor.prototype.listAllAuthTypes = function () {
  console.log('in listAllAuthTypes ', this.apiData);
  const authList = this.apiData['entries'].map(api => api.Auth);
  return authList;
}

InfoProcessor.prototype.getAuthTypesList = function () {
  return this.listAllAuthTypes.filter((authType, index, array) => {
    return array.indexOf(authType) === index;
  });
}
InfoProcessor.prototype.searchByAuthType = function (api_data, authSelectedArray) {
// why is this.apiData empty here????
  console.log('looking for auth: ', authSelectedArray);
console.log('apiData', api_data);
const dataSelected = api_data.filter(api => ( authSelectedArray.includes(api['Auth'])));
return dataSelected;

//  }
};

// Park.prototype.removeAll = function(species_to_remove){
  // var counter = this.dinosaurs.length;
  // var corral = [];
//   while (counter--) {
//     if (this.dinosaurs[counter].species === species_to_remove) {
//       corral.push( this.dinosaurs.splice(counter,1)[0] );
//     };
//   };
//   return corral;
// };
module.exports = InfoProcessor;

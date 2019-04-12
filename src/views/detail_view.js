const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (container, dataItem){
  this.itemContainer = container;
  this.listItem = dataItem;
};

DetailView.prototype.render = function (){
  const dataListItemElement = document.createElement('li');
  dataListItemElement.classList.add('data-list-item');
// here is where it becomes specific to this API,
// which I would like to fix later
  const listItemHeading = this.createElement('h3', this.listItem.API);
  dataListItemElement.appendChild(listItemHeading);
  //
  // const listItemDetails = document.createElement('ul');
  // const munroMeaningLI = this.createElement('li','Meaning: ' + this.munro.meaning);
  // const munroHeightLI = this.createElement('li', 'Height: ' + this.munro.height);
  // const munroRegionLI = this.createElement('li', 'Region: ' + this.munro.region);
  // munroDetails.appendChild(munroMeaningLI);
  // munroDetails.appendChild(munroHeightLI);
  // munroDetails.appendChild(munroRegionLI);
  // munroListItem.appendChild(munroDetails);
  this.itemContainer.appendChild(dataListItemElement);
};

DetailView.prototype.createElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

module.exports = DetailView;

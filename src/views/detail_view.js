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

  const listItemDetails = document.createElement('ul');

// console.log('category: ', this.listItem.Category);
  // TODO: split this into label span (bold) and content span
  const apiCategoryLI = this.createElement('li','Category: ' + this.listItem.Category);
  const apiDescriptionLI = this.createElement('li', 'Description: ' + this.listItem.Description);
  const apiLinkLI = this.createElement('li', 'URL: ' + this.listItem.Link);
  const apiAuthLI = this.createElement('li', 'Auth: ' + this.listItem.Auth);
  const apiCorsLI = this.createElement('li', 'CORS: ' + this.listItem.Cors);
  const apiHTTPSLI = this.createElement('li', 'HTTPS: ' + this.listItem.HTTPS);

  listItemDetails.appendChild(apiCategoryLI);
  listItemDetails.appendChild(apiDescriptionLI);
  // TODO: this needs to be made into a link
  listItemDetails.appendChild(apiLinkLI);
  listItemDetails.appendChild(apiAuthLI);
  listItemDetails.appendChild(apiCorsLI);
  listItemDetails.appendChild(apiHTTPSLI);

  dataListItemElement.appendChild(listItemDetails);
  this.itemContainer.appendChild(dataListItemElement);
};

// add a label to this function so it can be made bold
DetailView.prototype.createElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

module.exports = DetailView;

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

  this.addLIToDataList(listItemDetails, 'Category: ', this.listItem.Category);
  this.addLIToDataList(listItemDetails, 'Description: ', this.listItem.Description);
  const apiLinkA = this.createLink( this.listItem.Link, this.listItem.Link);
  const apiLinkLI = document.createElement('li');
  const apiLinkLabel = this.createLabel ( 'URL: ');
  apiLinkLI.appendChild( apiLinkLabel );
  apiLinkLI.appendChild( apiLinkA );
  listItemDetails.appendChild(apiLinkLI);
  this.addLIToDataList(listItemDetails, 'Auth: ', this.listItem.Auth);
  this.addLIToDataList(listItemDetails,  'CORS: ', this.listItem.Cors);
  this.addLIToDataList(listItemDetails, 'HTTPS: ', this.listItem.HTTPS);

  dataListItemElement.appendChild(listItemDetails);
  this.itemContainer.appendChild(dataListItemElement);
};

DetailView.prototype.addLIToDataList = function(itemDetails, label, content){
  itemDetails.appendChild(this.createElementWithLabel('li', label, content));
};


DetailView.prototype.createElementWithLabel = function(type, labelText, text) {
  const element = document.createElement(type);
  const labelElement = this.createLabel(labelText);
  element.appendChild(labelElement);
  const elementContent = this.createElement('span', text);
  element.appendChild(elementContent);
  return element;
};

DetailView.prototype.createElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

DetailView.prototype.createLabel = function( text ) {
  const element = document.createElement('span');
  element.textContent = text;
  element.className += "label";
  return element;
};

DetailView.prototype.createLink = function( url, text ) {
  const element = document.createElement('a');
  element.textContent = text;
  element.href = url;
  return element;
}

module.exports = DetailView;

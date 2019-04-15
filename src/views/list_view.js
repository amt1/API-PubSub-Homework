const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function(container){
  this.container = container;
  this.dataList=[];
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('InfoProcessor:api-data-ready', (event)=>{
    this.dataList = event.detail;
    this.render();
  });
};

ListView.prototype.render = function () {
  const dataListULElement = document.createElement('ul');
  dataListULElement.id="list-data-here";
  this.container.appendChild(dataListULElement);
  console.log('dataList: ', this.dataList);
  let counter = 0;
  let max = this.dataList['count'];
  for (counter = 0; counter < max; counter++) {
    const detailView = new DetailView(dataListULElement, this.dataList['entries'][counter]);
    detailView.render();
  };
};


module.exports = ListView;

const InfoProcessor = require('./models/info_processor.js');
const ListView = require('./views/list_view.js');
const DetailView = require('./views/detail_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  var apiURL = 'https://api.publicapis.org/entries';
  const infoProcessor = new InfoProcessor();
  infoProcessor.fetchURLData(apiURL);

  const listContainer = document.querySelector('section#data-list-section');

  const listView = new ListView(listContainer);
  listView.bindEvents();


}); // end brackets

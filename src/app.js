const InfoProcessor = require('./models/info_processor.js');
const ListView = require('./views/list_view.js');
const DetailView = require('./views/detail_view.js');
const SelectView = require('./views/select_view.js');

// Where is it specific to this API?
// The url in this file
// The data structure and key names in the list_view.js file
// Could this be made more generic so that these could be
// read in from somewhere else?

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // toggle show / hide of select form
  const searchForm = document.querySelector('#search-form');
  const selectView = new SelectView(searchForm);
  const showFormInput = document.querySelector('#show-form');
  showFormInput.addEventListener('change', selectView.handleShowFormInput);

  // fetch data from URL
  // var apiURL = 'https://api.publicapis.org/entries';
  const apiURL = 'https://api.publicapis.org/entries?category=animals';
  const infoProcessor = new InfoProcessor();
  const originalData = infoProcessor.fetchURLData(apiURL);
  console.log('orig',originalData);
  // display full data list
  const listContainer = document.querySelector('section#data-list-section');
  const listView = new ListView(listContainer);
  listView.bindEvents();
  infoProcessor.bindEvents();
const dataSelected = infoProcessor.searchByAuthType(['apiKey']);
console.log('dataSelected apiKey', dataSelected);
}); // end brackets

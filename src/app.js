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
  const searchForm = document.querySelector('#search-form');
  const selectView = new SelectView(searchForm);
  const showFormInput = document.querySelector('#show-form');

  const handleShowFormInput = function(event){
      let showForm = false;

      if (event.target.checked){
        showForm=true;
        searchForm.className="show";
      } else {
        showForm = false;
        searchForm.className="hide";

      }
      console.log('showForm', showForm);
  };
  showFormInput.addEventListener('change', handleShowFormInput);

  var apiURL = 'https://api.publicapis.org/entries';
  const infoProcessor = new InfoProcessor();
  infoProcessor.fetchURLData(apiURL);

  const listContainer = document.querySelector('section#data-list-section');

  const listView = new ListView(listContainer);
  listView.bindEvents();


}); // end brackets

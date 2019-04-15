const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(container) {
  this.container = container;
};

SelectView.prototype.handleShowFormInput = function(event){
    let showForm = false;

    if (event.target.checked){
      showForm=true;
      this.container.className="show";
    } else {
      showForm = false;
      this.container.className="hide";

    }
};

module.exports = SelectView;

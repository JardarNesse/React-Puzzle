// sort of the controller

var React = require('react');
var Checkout = require('./Checkout');
var CheckoutView = require('./CheckoutView');
var Carpet = require('./Carpet');
var Questionnaire = require('./Questionnaire');
var CheckoutRepository = require('../repositories/CheckoutRepository');
var QuestionnaireRepository = require('../repositories/QuestionnaireRepository');

// Method to retrieve state from Stores
function getApplicationState() {
  return {
    contactInfoVisible: CheckoutRepository.getContactInfoVisible(),
    contactInfo: CheckoutRepository.getContactInformation(),
    results: QuestionnaireRepository.getResults()
  };
}

// Define main Controller View
var PuzzleApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getApplicationState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    CheckoutRepository.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    CheckoutRepository.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div>
        <Questionnaire results={this.state.results}/>
        <Carpet results={this.state.results}/>
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getApplicationState());
  }
});

module.exports = PuzzleApp;
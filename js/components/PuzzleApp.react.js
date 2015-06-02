// sort of the controller

var React = require('react');
var Carpet = require('./Carpet');
var Questionnaire = require('./Questionnaire');
var QuestionnaireRepository = require('../repositories/QuestionnaireRepository');

// Method to retrieve state from Stores
function getApplicationState() {
  return {
    results: QuestionnaireRepository.getResults(),
    currentQuestionId: QuestionnaireRepository.getCurrentQuestionId()
  };
}

// Define main Controller View
var PuzzleApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    globalStuff.playSound(soundMagicStart);
    return getApplicationState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    QuestionnaireRepository.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    QuestionnaireRepository.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div>
        <Questionnaire results={this.state.results} />
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
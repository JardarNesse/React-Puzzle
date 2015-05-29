var React = require('react');
var Actions = require('../actions/actions');
var answer = '';

var Questionnaire = React.createClass({

 setValues: function(event){

 	var result = {
 		answer: event.target.value,
 		ds: this.props.results
 	};

    Actions.updateResults(result);

  },

  getNextQuestion: function(event){

  	Actions.getNextQuestionId(this.props.results);
  	
  	var input = document.getElementById('answer');
  	input.value = '';
  	input.focus();
  },

  render: function() {

  	var data = this.props.results;
  	var item = data.variants[data.currentQuestionId];

    return (
      	<div className="questionnaire">
      		<h1>Oppgaver for 1. klasse [{item.id}]</h1>
      		<span className="question">{item.question}</span><br/>
      		<input id="answer" className="question" type="text" value={this.answer} onChange={this.setValues}></input>
      		<button type="button" id="btn" onClick={this.getNextQuestion}>Neste</button>
      	</div>
    );
  }
});

module.exports = Questionnaire;
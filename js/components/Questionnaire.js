var React = require('react');
var Actions = require('../actions/actions');
var answer = '';

var Questionnaire = React.createClass({

 setValues: function(event){

 	var result = {
 		answer: null,
 		ds: null
 	};

 	result.answer = event.target.value;
 	result.ds = this.props.results;

 	/*var res = [];
 	res[0] = event.target.value;
 	res[1] = this.props.results;*/

    Actions.updateResults(result);
  },

  getNextQuestion: function(event){
  	Actions.setCurrentQuestionId();
  	/*var input = document.getElementById('answer');
  	input.focus();
  	input.value = '';*/
  },

  render: function() {

  	var data = this.props.results;
  	var index = data.currentQuestionId;
  	var item = data.variants[index];

    return (
      	<div className="questionnaire">
      		<h1>Oppgaver for 1. klasse (spørsmål: {item.id})</h1>
      		<span className="question">{item.question}</span><br/>
      		<input id="answer" className="question" type="text" value={this.answer} onChange={this.setValues}></input>
      		<button type="button" onClick={this.getNextQuestion}>Neste</button>
      	</div>
    );
  }
});

module.exports = Questionnaire;
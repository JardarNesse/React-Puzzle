var React = require('react');
var Actions = require('../actions/actions');
var answer = '';

var Questionnaire = React.createClass({

 setValues: function(event){

 	answer = event.target.value;
 	var id = this.props.currentQuestionId;
 	var ds = this.props.results;

 	var res = [];
 	res[0] = parseInt(id,10);
 	res[1] = answer;
 	res[2] = ds;

    Actions.updateResults(res);
  },

  getNextQuestion: function(event){
  	Actions.setCurrentQuestionId();
  },

  render: function() {

  	var data = this.props.results;
  	var index = this.props.currentQuestionId;
  	var item = data.variants[index];

    return (
      	<div className="questionnaire">
      		<h1>Oppgaver for 1. klasse (spørsmål: {item.id})</h1>
      		<span className="question">{item.question}</span><br/>
      		<input className="question" type="text" value={this.answer} onChange={this.setValues}></input>
      		<button type="button" onClick={this.getNextQuestion}>Neste</button>
      	</div>
    );
  }
});

module.exports = Questionnaire;
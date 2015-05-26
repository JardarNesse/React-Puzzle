var React = require('react');
var Actions = require('../actions/actions');
var answer = '';
var currentQuestionId = Math.floor((Math.random() * 41) + 0);

var Questionnaire = React.createClass({

 setValues: function(event){

 	answer = event.target.value;

 	var id = currentQuestionId;
 	var answer = event.target.value;
 	var ds = this.props.results;

 	var res = [];
 	res[0] = parseInt(currentQuestionId,10);
 	res[1] = answer;
 	res[2] = ds;

    Actions.updateResults(res);
  },

  render: function() {

  	var data = this.props.results;
  	var index = currentQuestionId;
  	var item = data[index];

    return (
      	<div className="questionnaire">
      		<h1>Oppgaver for 1. klasse (spørsmål: {item.id})</h1>
      		<span className="question">{item.question}</span><br/>
      		<input className="question" type="text" value={this.answer} onChange={this.setValues}></input>
      	</div>
    );
  }
});

module.exports = Questionnaire;
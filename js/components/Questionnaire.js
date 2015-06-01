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
      		<div className="questions">
      			<h1>Junior Quiz</h1>
      			<span className="category">{item.category}</span><br/><br/>
	      		<span className="question">{item.question}</span><br/><br/>
	      		<input id="answer" className="your-answer" type="text" value={this.answer} onChange={this.setValues}></input>
	      		<button type="button" id="btn" onClick={this.getNextQuestion}>Neste</button><br/>
	      		<span className="sysinfo">Spørsmål id {item.id}</span><br/>
      		</div>
      	</div>
    );
  }
});

module.exports = Questionnaire;
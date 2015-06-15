var React = require('react');
var Actions = require('../actions/actions');
var answer = '';

var ListItemWrapper = React.createClass({

    setSelectedOption: function(event){

    var result = {
      answer: this.props.text,
      ds: this.props.results
    }
    
    Actions.updateResults(result);
  },
  render: function() {
    return <li><input type="radio" name="alternatives" onChange={this.setSelectedOption}>{this.props.text}</input></li>
  }
});

var Questionnaire = React.createClass({

  getNextQuestion: function(event){

  	Actions.getNextQuestionId(this.props.results);
  	
  	var input = document.getElementById('answer');

    if (input !== null){
      input.value = '';
      input.focus();  
    }
  },

  setValues: function(event){

  var result = null;

   result = {
      answer: event.target.value,
      ds: this.props.results
    }
    
    Actions.updateResults(result);

  },

  render: function() {

  	var data = this.props.results;
    var item = data.variants[data.currentQuestionId];
    var input;

    if (item.alternatives === undefined){
      input = <input id="answer" className="your-answer" type="text" value={this.answer} onChange={this.setValues}></input>  
    }
    else {

      var indents = [];

      for (var i = 0; i < item.alternatives.length; i++) {

              var result = {
              id: i,
              text: item.alternatives[i] 
          }

          indents.push(<ListItemWrapper key={result.id} text={result.text} results={data}/>);
        }
      input = <ol>{indents}</ol>
    }
    
      return (
          <div className="questionnaire">
            <div className="questions">
              <h1>Junior Quiz</h1>
              <span className="category">{item.category}</span><br/><br/>
              <span className="question">{item.question}</span><br/><br/>
              {input}
              <button type="button" id="btn" onClick={this.getNextQuestion}>Neste</button><br/>
              <span className="sysinfo">Special thanks to http://www.freesfx.co.uk for sounds.</span><br/>
            </div>
          </div>
        ); 
    }
});

module.exports = Questionnaire;
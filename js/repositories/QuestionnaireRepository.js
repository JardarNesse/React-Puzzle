// sort of model
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var totalNumberOfQuestions = 41;
var _currentQuestionId = 0;
var _results = {};

// Method to load product data from mock API
function receiveData(data) {
  _results = data[0];
}

function getRandomNumberFrom(range){
  return Math.floor((Math.random() * range) + 0);
}

function setQuestionId(data) {

  var questionSets = _results.variants;

  var remaining = _.filter(questionSets, 
  function(qs) { 
    return qs.completed === 0; 
  });

  if (remaining.length < 1){
      playSound(soundWinner);
  }
  else
  {
    var _currentQuestionId = getRandomNumberFrom(totalNumberOfQuestions);

    while(questionSets[_currentQuestionId].completed === 1){
      _currentQuestionId = getRandomNumberFrom(totalNumberOfQuestions);
    }

    data.currentQuestionId = _currentQuestionId;  
  }
}

function completeQuestion(qs){
    qs.completed = 1;
    qs.css = 'carpet-transparent';
    //playSound(soundNext);
    document.getElementById('btn').focus();
}

function instantFeedback(answer, correctAnswer){
  for(var i = 0; i < answer.length; i ++){
    if (answer[i] !== correctAnswer[i]){
        //playSound(soundBoo);
    }
  }
}

function setResults(data) {

  var id = data.ds.currentQuestionId;
  var qs = data.ds.variants[id];
  var question = qs.question;
  var answer = data.answer.toLowerCase();
  var correctAnswer = qs.answer.toLowerCase();

  instantFeedback(answer, correctAnswer);

  if (answer === correctAnswer) {
    completeQuestion(qs);
  }
}

// Extend QuestionnaireRepository with EventEmitter to add eventing capabilities
var QuestionnaireRepository = _.extend({}, EventEmitter.prototype, {

 // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  getCurrentQuestionId: function(){
      return _currentQuestionId;
  },

  getResults: function(){
      return _results;
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {

  if(payload.action.actionType === Constants.SET_NEXT_QUESTIONID){
    setQuestionId(payload.action.data);    
  }

  if(payload.action.actionType === Constants.RECEIVE_DATA){
    receiveData(payload.action.data);   
  }

 if(payload.action.actionType === Constants.UPDATE_RESULTS){
    setResults(payload.action.data);    
  }

  // If action was responded to, emit change event
  QuestionnaireRepository.emitChange();
  
  return true;
});

module.exports = QuestionnaireRepository;

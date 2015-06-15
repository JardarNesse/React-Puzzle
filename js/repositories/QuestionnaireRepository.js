// sort of model
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var totalNumberOfQuestions = 42;
var _currentQuestionId = null;
var _results = {};

// Method to load product data from mock API
function receiveData(data) {
  _results = data[0];
  _results.currentQuestionId = globalStuff.getRandomNumberFrom(totalNumberOfQuestions);
}

function setQuestionId(data) {

  var questionSets = _results.variants;

  var remaining = _.filter(questionSets, 
  function(qs) { 
    return qs.completed === 0; 
  });

  if (remaining.length > 0){
     var random = globalStuff.getRandomNumberFrom(totalNumberOfQuestions);

    while(questionSets[random].completed === 1){
      random = globalStuff.getRandomNumberFrom(totalNumberOfQuestions);
    }

    data.currentQuestionId = random;  
    globalStuff.playSound(soundOpenDoor);
  }
  else
  {
    globalStuff.playSound(soundYeehaa);  
  }
}

function completeQuestion(qs){
    qs.completed = 1;
    qs.css = 'carpet-transparent';
    globalStuff.playSound(soundMagic);
    document.getElementById('btn').focus();
    if (qs.alternatives !== undefined){
      qs.alternatives = [];  
    }
}

function instantFeedback(answer, correctAnswer){
  for(var i = 0; i < answer.length; i ++){
    if (answer[i] !== correctAnswer[i]){
        globalStuff.playSound(soundAhAhAh);
    }
  }
}

function setResults(data) {

  var id = data.ds.currentQuestionId;
  var qs = data.ds.variants[id];
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

// sort of model
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var _results = {};

// Method to load product data from mock API
function receiveData(data) {
  _results = data[0].variants;
}

function setResults(data) {
    var id = data[0];
    var answer = data[1];
    var questionSet = data[2];

  if (answer === questionSet[id].answer){
    questionSet[id].completed = 1;
    questionSet[id].css = 'carpet-transparent';
  }
  else{
    questionSet[id].completed = 0;
    questionSet[id].css = 'carpet-black-A';
  }
}

// Extend QuestionnaireRepository with EventEmitter to add eventing capabilities
var QuestionnaireRepository = _.extend({}, EventEmitter.prototype, {

 // Emit Change event
  emitChange: function() {
    this.emit('change');
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

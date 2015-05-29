var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');

// Define action methods 
var Actions = {
 
 getNextQuestionId: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.SET_NEXT_QUESTIONID,
      data: data
    })
 },

 updateResults: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.UPDATE_RESULTS,
      data: data
    })
  },

  receivePuzzleData: function(data, howl) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    })
  }
  
};


module.exports = Actions;
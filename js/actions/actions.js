var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');

// Define action methods 
var Actions = {
 
 updateResults: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.UPDATE_RESULTS,
      data: data
    })
  },

  receivePuzzleData: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    })
  }

};


module.exports = Actions;
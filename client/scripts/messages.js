// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  add: function (message) {
    (this._data).push(message);
  },

  retrieve: function () {
    var filteredMessages = [];
    for (var i = 0; i < this._data.length; i++) {
      var messageRoomName = JSON.stringify(this._data[i]['roomname']);
      var stringifiedCurrentRoom = JSON.stringify(Rooms.currentRoom);
      if (messageRoomName === stringifiedCurrentRoom) {
        filteredMessages.push(this._data[i]);
      }
    }
    return filteredMessages;
  },

};
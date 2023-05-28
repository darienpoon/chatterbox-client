// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  currentRoom: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function (roomName) {
    this._data.add(roomName);
  },

  deleteRoom: function (roomName) {
    this._data.delete(roomName);
  },

  selectRoom: function (roomName) {
    this.currentRoom = roomName;
  }
};
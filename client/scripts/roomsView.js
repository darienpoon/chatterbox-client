// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$button.on('click', this.handleClick);
    this.$select.on('change', this.handleChange);
    Parse.readAll((data) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i]['roomname'] !== null) {
          Rooms.addRoom(data[i]['roomname']);
        }
      }
    });

  },

  generateHTML: _.template(
    '<option value="<%= roomname %>"><%= roomname%></option>'
  ),

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    for (var room of Rooms._data) {
      this.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.append(RoomsView.generateHTML({roomname: roomname}));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selectRoom($(this).val());
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var $input = $('#rooms input');
    if (($input).attr('hidden')) {
      $input.removeAttr('hidden');

    } else {
      var roomInput = $input.val();
      Rooms.addRoom(roomInput);
      RoomsView.render();
      ($input).attr('hidden', true);

    }
  }

};

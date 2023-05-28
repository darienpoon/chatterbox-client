// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    Parse.readAll(data => {
      for (var i = 0; i < data.length; i++) {
        Messages.add(data[i]);
      }
    });



  },

  render: function() {
    // TODO: Render _all_ the messages.

    this.$chats.empty();
    var filteredMessages = Messages.retrieve();

    for (var i = 0; i < filteredMessages.length; i++) {
      this.renderMessage(filteredMessages[i]);
    }
    var $chat = $('.chat');
    $chat.on('click', MessagesView.handleClick);

    for (var i = 0; i < filteredMessages.length; i++) {
      $chat.each(function () {
        if ((Friends._data.has($(this)[0].children[0].outerText))) {
          $(this).addClass('friend');
        }
      });
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.append(MessageView.render(message));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //console.log($(this)[0].children[0].innerText);
    Friends.addFriend($(this)[0].children[0].innerText);
    console.log(Friends._data);
  }

};
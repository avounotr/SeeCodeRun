/* global $ */

export class Chat {

  constructor(firebaseManager) {
    this.firebaseManager = firebaseManager;
  }
  
  attached(params) {
    let chatFirebaseRef = this.firebaseManager.makeChatFirebase();
    let $chat = $('#chatDiv');
    
    $chat.hide();
  
    let messageField = $('#messageInput');
    let nameField = $('#nameInput');
    let messageList = $('#seecoderun-messages');

    messageField.keypress(function(e) {
      if (e.keyCode == 13) {
        let username = nameField.val();
        let message = messageField.val();

        chatFirebaseRef.push({
          name: username,
          text: message
        });
        messageField.val('');
      }
    });

    chatFirebaseRef.limitToLast(10).on('child_added', function child_added(snapshot) {

        let data = snapshot.val();
        let username = data.name;
        let message = data.text;
  
        let messageElement = $("<li>");
        let nameElement = $("<strong class='seecoderun-chat-username'></strong>");
        nameElement.text(username);
        messageElement.text(message).prepend(nameElement);
  
        messageList.append(messageElement);
        messageList[0].scrollTop = messageList[0].scrollHeight;
    });

    $('#hide').click(function hideChatBox() {
      $chat.toggle();
      let isVisible = $chat.is( ":visible" );
      if(isVisible){
        $chat.draggable();
        $chat.resizable({
          handles: "n, e, s, w"
        });
      }
    });
  }
}
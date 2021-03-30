// Using ES6

import React from "react";
import { TalkBox } from "react-talk";

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          author: "Ponger",
          authorId: "pong",
          message: "How you doin'!",
          timestamp: Date.now().toString(),
        },
      ],
    };
  }

  onMessageReceive = (msg) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, msg],
    }));
  };

  sendMessage = (msg, selfMsg) => {
    // selfMsg is the message object constructed from the message typed by the current user
    // NOTE: selfMsg doesn't include timestamp and needs to be added by the user of the module
    // in client or server side as required
    selfMsg["timestamp"] = Date.now().toString();
    this.setState((prevState) => ({
      messages: [...prevState.messages, selfMsg],
    }));
    // Insert code to send the message below
  };

  render() {
    return (
      <div
        style={{
          padding: "24px",
        }}
      >
        <TalkBox
          topic="react-websocket-template"
          currentUserId="ping"
          currentUser="Pinger"
          messages={this.state.messages}
          onSendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

export default ChatBox;

import React,{useEffect} from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
    useEffect(() => {
        addResponseMessage('Welcome to Bookxchanger!');
      }, []);
     
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };
    return (
      <>
          <div className="App">
            <Widget
              handleNewUserMessage={handleNewUserMessage}
              title="Bookxchanger"
              subtitle="How may I help you"
            />
        </div>
      </>
    )
}

export default Chatbot

 

 

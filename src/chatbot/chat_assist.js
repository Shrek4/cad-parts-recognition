
import React, { Component } from 'react';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import './chat_assist.css'
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Speech from './speech';


class ChatAssist extends Component {


    render() {
        return (
              <div className="App">
      <Chatbot
        config={config}
        headerText='Conversation with Shrek'
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <Speech/>
    </div>
        )
      }
}

export default ChatAssist;
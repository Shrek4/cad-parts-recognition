import { createChatBotMessage } from 'react-chatbot-kit';
import { useSpeechRecognition } from 'react-speech-recognition';

const botName = "Shrek";
const config = {
    initialMessages: [
        createChatBotMessage(`Привет, меня зовут ${botName}.`),
        createChatBotMessage(`Чем могу помочь?`)
    ],
    customComponents: {
        userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
    }

};

export default config;

function MyCustomUserChatMessage(props) {
    const { transcript } = useSpeechRecognition();
    let voice=transcript
    console.log(transcript)
    return (
        <p>{voice ? "sas": props.message}</p>
    );
  }

function MyAvatar() {
  
    return (
      <div>
        <p>Shrek</p>
      </div>
    );
  }
import { createChatBotMessage } from 'react-chatbot-kit';


const botName = "Shrek";
const config = {
    initialMessages: [
        createChatBotMessage(`Привет, меня зовут ${botName}.`),
        createChatBotMessage(`Чем могу помочь?`)
    ],
    // customComponents: {
    //     userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
    // }

};

export default config;



function MyAvatar() {
  
    return (
      <div>
        <p>Shrek</p>
      </div>
    );
  }
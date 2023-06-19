import { createChatBotMessage } from 'react-chatbot-kit';


// конфиг
const botName = "Shrek";
const config = {
    initialMessages: [
        createChatBotMessage(`Привет, меня зовут ${botName}.`),
        createChatBotMessage(`Чем могу помочь?`)
    ],


};

export default config;



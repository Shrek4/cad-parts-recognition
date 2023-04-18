import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Привет. Чем могу помочь?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDescription = () => {
    const botMessage = createChatBotMessage('Это приложение с набором данных чертежей деталей, здесь можно распознавать детали на чертеже. Чтобы это сделать, зайдите в раздел "Распознавание деталей"');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelp = () => {
    const botMessage = createChatBotMessage('Чтобы узнать подробнее о проекте, напишите "о проекте".');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelpRecognize = () => {
    const botMessage = createChatBotMessage('Зайдите в раздел "Распознавание деталей", загружите чертёж в растровом формате и нажмите "Далее".');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDescDataset = () => {
    const botMessage = createChatBotMessage('Набор данных состоит из 125 деталей, принадлежащих к 5 классам: болты, гайки, шайбы, подшипники и сальники. Каждой детали соответствует стандарт, размер и некоторое количество изображений на чертеже в разных проекциях и разворотах.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSource = () => {
    const botMessage = createChatBotMessage('Ссылки на исходники: набор данных - https://github.com/Shrek4/cad-dataset веб-приложение - https://github.com/Shrek4/cad-parts-recognition');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOther = () => {
    const botMessage = createChatBotMessage('Не понял вопроса. Напиши "помощь".');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDescription,
            handleHelp,
            handleHelpRecognize,
            handleSource,
            handleDescDataset,
            handleOther
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
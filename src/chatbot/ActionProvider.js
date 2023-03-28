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
    const botMessage = createChatBotMessage('Здесь описание проекта');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelp = () => {
    const botMessage = createChatBotMessage('Здесь список команд');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelpRecognize = () => {
    const botMessage = createChatBotMessage('Здесь инструкция');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDescDataset = () => {
    const botMessage = createChatBotMessage('Здесь информация о наборе данных');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSource = () => {
    const botMessage = createChatBotMessage('Здесь ссылки на исходники');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOther = () => {
    const botMessage = createChatBotMessage('Не понял вопроса');

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
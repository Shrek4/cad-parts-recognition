import React from 'react';

// здесь задаются правила
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    message=message.toLowerCase()
    if (message.includes('привет')||message.includes('здравствуйте')) {
      actions.handleHello();
    }
    else if (message.includes('help')||message.includes('помощь')||message.includes('помоги')||message.includes('а как')) {
      actions.handleHelp();
    }
    else if (message.includes('о проекте')||message.includes('о программе')) {
      actions.handleDescription();
    }
    else if (message.includes('распознать')||message.includes('распознавание')) {
      actions.handleHelpRecognize();
    }
    else if (message.includes('датасет')||message.includes('набор данных')||message.includes('наборе данных')) {
      actions.handleDescDataset();
    }
    else if (message.includes('исходник')||message.includes('источник')||message.includes('код')) {
      actions.handleSource();
    }
    else{
      actions.handleOther();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
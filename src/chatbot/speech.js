import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Speech() {
    const { transcript } = useSpeechRecognition();
  
  
    return (
      <div>
        <h3>Голосовой ввод</h3>
        <p>{transcript ? transcript : 'Start listening for transcript'}</p>
      
        <button onClick={SpeechRecognition.startListening}>Start listening</button>
        &nbsp;
        <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
      </div>
    );
  }

export default Speech;
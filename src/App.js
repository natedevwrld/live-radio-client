import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='header'>My Awesome Radio Station</h1>
      <audio
        controls
        className='audio-player'
        type='audio/mp3'
        src='https://live-radio-server.onrender.com/stream'
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};



export default App;

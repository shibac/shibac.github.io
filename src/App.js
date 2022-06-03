import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";
import { usePWAInstall } from "react-use-pwa-install";

function App() {
  const install = usePWAInstall();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Play Audio from link</p>
        <ReactAudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          autoPlay
          controls
        />
        {install == null ? <p>false</p> : <p>true</p>}
        {install && <button onClick={install}>Install</button>}
      </header>
    </div>
  );
}

export default App;

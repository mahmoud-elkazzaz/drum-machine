import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Howl, Howler } from 'howler';
import React, {useState, useEffect} from 'react';
import Boom from './audio/boom.wav'
import Clap from './audio/clap.wav'
import Hihat from './audio/hihat.wav'
import Kick from './audio/kick.wav'
import Openhat from './audio/openhat.wav'
import Ride from './audio/ride.wav'
import Snare from './audio/snare.wav'
import Tink from './audio/tink.wav'
import Tom from './audio/tom.wav'

function App() {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case ("q"):
        case ("Q"):
          document.getElementById(Boom).click()
          break;
        case ("w"):
        case ("W"):
          document.getElementById(Clap).click()
          break;
        case ("e"):
        case("E"):
          document.getElementById(Hihat).click()
          break;
        case ("a"):
        case ("A"):
          document.getElementById(Kick).click()
          break;
        case ("s"):
        case ("S"):
          document.getElementById(Openhat).click()
          break;
        case ("d"):
        case ("D"):
          document.getElementById(Ride).click()
          break;
        case ("z"):
        case ("Z"):
         document.getElementById(Snare).click()
          break;
        case ("x"):
        case ("X"):
          document.getElementById(Tink).click()
          break;
        case ("c"):
        case ("C"):
          document.getElementById(Tom).click()
          break;
        default:          
      }
    });
  }, []);

  const [value, setValue] = useState(30)
  const volume = (e) => setValue(e.target.value)


  const fireOff = (id) => {
    console.log(id)
  const sound = new Howl({
    src: [id]
  });
  sound.play();
  }

  return (
    <div id="drum-machine" className="App">
      <div id="display" className="container">
        <div id="drum-pad">
          <button onClick={(e) => fireOff(e.target.id)} id={Boom}>Q</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Clap}>W</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Hihat}>E</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Kick}>A</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Openhat}>S</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Ride}>D</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Snare}>Z</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Tink}>X</button>
          <button onClick={(e) => fireOff(e.target.id)} id={Tom}>C</button>
        </div> 
        <div id="control">
          <div>
            <span className="labels">Power</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div id="note">{value}</div>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value={value} id="volume" onChange={(e) => volume(e)}>
            </input>
          </div>
          <div>
            <span className="labels">Bank</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div> 
      </div>
    </div>
  );
}



export default App;

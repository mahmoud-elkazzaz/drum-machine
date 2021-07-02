import React, { useState, useEffect} from 'react';
import { drumsArr, pianoArr } from './Sound';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Howl, Howler } from 'howler';

function App() {

  const [value, setValue] = useState(30)
  const [bank, setBank] = useState("Drums")
  const [power, setPower] = useState(true)

  const setVolume = (e) => {
    document.getElementById('note').style.opacity = "1"
    document.getElementById('note').innerHTML = `Volume: ${e.target.value}`
    setValue(e.target.value)
    setTimeout(function () { document.getElementById('note').style.opacity = "0" }, 1000);
  }

  const beat = () => {
    document.getElementById('note').style.opacity = "1"
    bank === "Drums" ? setBank("Piano") : setBank("Drums")
  }

  const isChecked = () => {
    setPower(!power)
    if (power) {
      document.getElementById('volume').disabled = true
      document.getElementById('bankSwitch').disabled = true
      document.getElementById('note').innerHTML = null
      Howler.stop()
    } else {
      document.getElementById('volume').disabled = false
      document.getElementById('bankSwitch').disabled = false
    }
  }

  const keyPressed = (e) => {
    let newArr = []
    if (bank === "Drums") {
      newArr = drumsArr.filter((chord) => chord.key === e.key || chord.cap === e.key)
    } else {
      newArr = pianoArr.filter((chord) => chord.key === e.key || chord.cap === e.key)
    }
    let volume = value / 100
    if (newArr.length !== 0 && power) {
        let hit = newArr[0].hit
        document.getElementById('note').innerHTML = newArr[0].name
        document.getElementById('note').style.opacity = "1"
        const sound = new Howl({
          src: [hit],
          volume: volume
        });
        sound.play()
      } 
  }

    useEffect(() => {
       window.addEventListener('keydown', keyPressed)
       return() => {
        window.removeEventListener('keydown', keyPressed)
       }
    },)
   
    const fireOff = (event) => {
      if(power){
        let hit;
        let name;
        let volume = value / 100
        const id = event.target.id
        if (bank === "Drums") {
        hit = drumsArr[id].hit
        name = drumsArr[id].name 
        } else {
        hit = pianoArr[id].hit
        name = pianoArr[id].name
        }
        document.getElementById('note').style.opacity = "1"
        document.getElementById('note').innerHTML = name
        const sound = new Howl({
        src: [hit],
        volume: volume
        });
        sound.play()
      }
    }

  return (
    <div id="drum-machine" className="App">
      <div id="display" className="container">
        <div id="drum-pad">
          <button onClick={(e) => fireOff(e)} id={0}>Q</button>
          <button onClick={(e) => fireOff(e)} id={1}>W</button>
          <button onClick={(e) => fireOff(e)} id={2}>E</button>
          <button onClick={(e) => fireOff(e)} id={3}>A</button>
          <button onClick={(e) => fireOff(e)} id={4}>S</button>
          <button onClick={(e) => fireOff(e)} id={5}>D</button>
          <button onClick={(e) => fireOff(e)} id={6}>Z</button>
          <button onClick={(e) => fireOff(e)} id={7}>X</button>
          <button onClick={(e) => fireOff(e)} id={8}>C</button>
        </div> 
        <div id="control">
          <div>
            <span className="labels">Power</span>
            <label className="switch">
              <input type="checkbox" id="powerSwitch" checked={power} onChange={isChecked}/>
              <span className="slider round"></span>
            </label>
          </div>
          <div id="noteWrapper"><p id="note">{bank}</p></div>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value={value} id="volume" onChange={(e) => setVolume(e)} />
          </div>
          <div>
            <span className="labels">Bank</span>
            <label className="switch">
              <input type="checkbox" id="bankSwitch" onChange={beat}/>
              <span className="slider"></span>
            </label>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;

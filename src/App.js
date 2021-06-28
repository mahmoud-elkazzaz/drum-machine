import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="drum-machine" className="App">
      <div id="display" className="container">
        <div id="drum-pad">
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
        </div> 
        <div id="control">
          <div>
            <span className="labels">Power</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div id="note"></div>
          <div class="slidecontainer">
            <input type="range" min="1" max="100" id="volume">
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

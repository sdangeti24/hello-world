import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import SongList from './components/Songs/SongList';

function App() {
  return (
    <div className="App">
      <p>The greeting is</p>
      <Greeting name="satish" age="42"/>
      <Greeting name="James" age="22"/>
      <Greeting name="Susan" age="23"/>

      <SongList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

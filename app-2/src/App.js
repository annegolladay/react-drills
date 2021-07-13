import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}


class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: ["apple", "peach", "watermelon", "banana"]
    };
  }

  render() {
    let fruitArr = this.state.fruit.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{fruitArr}</div>;
  }
}

export default App;

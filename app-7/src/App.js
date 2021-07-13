import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from "./NewTask"
import List from "./List"

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
    super()

    this.state = {
      list: []
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    )
  }
}

export default App;

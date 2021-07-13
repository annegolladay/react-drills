import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from "./Todo"

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
      list: [],
      input: ""
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInputChange(value) {
    this.setState({ input: value })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (
      <div className="App">
        <h1>To-Do List</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    )
  }
}

export default App;

import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor () {
    super();

    this.state = {
      name: 'Carlos',
      age: 29,
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name} Your age is {this.state.age} </p>
          <button 
            onClick={() => {
              this.setState({ name: 'Miki', age: 28});
            }}
          >
          Change Name
          </button>
        </header>
      </div>
    );
  }
}


export default App;

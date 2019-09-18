import React from 'react';
import logo from './logo.svg';
import './App.css';
import {configureStore} from './store';
import {Provider} from 'react-redux';
import Counter from './core/containers/CounterContainer';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter/>
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
      </Provider>
  );
}

export default App;

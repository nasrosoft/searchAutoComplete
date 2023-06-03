import React from 'react';
import logo from './logo.svg';
import { Search } from './features/search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <p>
          This is the <b>first</b> react app test.
        </p>
         
      </header>
    </div>
  );
}

export default App;

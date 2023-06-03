import React from 'react';
import { Search } from './features/search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <p>
          This is the <b>first</b> react app test.
        </p>
         
      </header>
    </div>
  );
}

export default App;

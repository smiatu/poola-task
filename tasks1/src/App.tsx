import React from 'react';
import Search from './components/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search searchType={'space'}/>
      <Search searchType={'address'} />
    </div>
  );
}

export default App;

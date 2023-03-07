import React from 'react';
import Search from './components/Search/Search';
import Panel from './components/Panel/Panel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search searchType={'space'}/>
      <Search searchType={'address'} />
      <Panel />
    </div>
  );
}

export default App;

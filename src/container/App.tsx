import React from 'react';
import DateSearchBar from '../components/DateSearchBar/DateSearchBar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='Search-header'>
        <DateSearchBar section='left' />
      </header>
    </div>
  );
}

export default App;

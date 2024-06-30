import React from 'react';
import './App.css';
import TealFead_Code_Editor from './Code_Editor';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1> A smart code ediotr thar highlits the text</h1>
      <TealFead_Code_Editor/>
    </div>
  );
};

export default App;

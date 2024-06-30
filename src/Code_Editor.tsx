import React, { useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';

const TealFead_Code_Editor: React.FC = () => {
  const [Words, setWords] = useState<string>('');

const handleClear=()=>{
  setWords('');
}
  return (
    <div>
      <form >
        <textarea
          value={Words}
          onChange={(e)=>setWords(e.target.value)}
          placeholder="Enter value you want to display "
          style={{ width: '100%', height: '200px', fontFamily: 'monospace' }}
        />
       
      </form>
      <h1>Below is the magic of Prism JS</h1>
      
        <SyntaxHighlighter language="javascript" style={darcula}>
          {Words}
        </SyntaxHighlighter>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      
    </div>
  );
};

export default TealFead_Code_Editor;
// src/App.js
import React, { useState } from 'react';
import { Controlled } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';

function App() {
    const [code, setCode] = useState('// Write your code here...');

    return (
        <div style={{height:'20px', padding: '2px' }}>
            <h1>CodeMirror in React</h1>
            <Controlled
                style={{ height: '20px', width: '40px' }} // Adjust height and width here
                value={code}
                className='code-mirror-wrapper'
                options={{
                    lineNumbers: true,
                    lineWrapping:true,
                    mode: 'javascript',
                    theme: 'dracula',
                    autoCloseBrackets: true,
                    matchBrackets: true,
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value); // Update the state with the new code
                }}
            />
            <h2>Output:</h2>
            <pre>{code}</pre>
        </div>
    );
}

export default App;

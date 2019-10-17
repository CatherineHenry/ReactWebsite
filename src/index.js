//index.js stores our main Render call from ReactDOM, it imports the App.js component and tells React where to render it
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.js'
// Use components to tell React what we want to see on the screen. When data changes, React will efficiently update
// and re-render the components.


// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function AppTwo() {
  return <h1>This is Second App</h1>
  
}

ReactDOM.render(
<>
 <App/>
 <AppTwo/>
 </>
  ,
  document.getElementById('root')
);


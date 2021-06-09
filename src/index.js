 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";


const [,,checklist]=["boots","tent","headlamp"];
console.log(checklist);


ReactDOM.render(

 <App authorized={false} />

  ,
  document.getElementById('root')
);


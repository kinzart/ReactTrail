import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <p>Eu sou o ReactDOM.render
      (Aquele que renderiza o app logo abaixo)</p><h1>⇊</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

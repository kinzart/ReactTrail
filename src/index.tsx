import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/firebase';
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <p>Eu sou o ReactDOM.render
      (Aquele que renderiza o app logo abaixo)</p><h1>⇊</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

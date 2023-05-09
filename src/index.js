import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Board from "./Board";
import { observe } from "./Game";

const root = ReactDOM.createRoot(document.getElementById('root'));
observe((knightPosition) => {
  root.render(
    // <React.StrictMode>
    <Board knightPosition={knightPosition}/>
    // </React.StrictMode>
    );
  }
)

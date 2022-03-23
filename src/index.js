import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';


const MENU = [
  { menu_id: "1", menu_name: "Eat", menu_priority: 1 },
  { menu_id: "2", menu_name: "Sleep", menu_priority: 2 },
  { menu_id: "3", menu_name: "Repeat", menu_priority: 3 }
];

ReactDOM.render(
    <App menu={MENU} />,
//  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

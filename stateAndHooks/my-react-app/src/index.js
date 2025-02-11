import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterFunction/>)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


reportWebVitals();

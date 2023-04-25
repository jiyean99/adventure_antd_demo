import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AButton from './Components/AButton';
import reportWebVitals from './reportWebVitals';
import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css'

const root = ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: [https://bit.ly/CRA-vitals](https://bit.ly/CRA-vitals)
reportWebVitals();
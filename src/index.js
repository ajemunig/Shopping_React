import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



//const header = <h1> This is my first React App </h1>;
//ReactDOM.render(header, document.getElementById('root'));

//But ReactDom.render() ia no longer used in React 18. So, we make use of createRoot method as follows 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

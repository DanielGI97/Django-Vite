import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterForm from './components/UserForm/RegisterForm';
import Hello from './components/Hello';

ReactDOM.createRoot(document.getElementById('register_root')).render(
    <React.Fragment>
        <RegisterForm />
        <h1>Hola desde React</h1>
    </React.Fragment>
);
/*
ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
console.log("Hola que tal.")
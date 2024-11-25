import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterForm from './components/UserForm/RegisterForm';
import Hello from './components/Hello';

ReactDOM.createRoot(document.getElementById('register-root')).render(
    <React.StrictMode>
        <RegisterForm />
        <Hello />
    </React.StrictMode>
);
/*
ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
import React from 'react';
import ReactDOM from 'react-dom';
import report from "./report"
import Login from './login';


const admin = ReactDOM.createRoot(document.getElementById("root"));
admin.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


report();
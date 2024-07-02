import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={()=> shoot("Goal!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')).render
(
  
     <App/>
 
 

)


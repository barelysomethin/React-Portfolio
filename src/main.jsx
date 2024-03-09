import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <App />
    <audio  autoPlay src="./src/luellagren Cut.mp3"></audio>
  </React.StrictMode>,
)

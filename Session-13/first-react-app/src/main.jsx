import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Store } from './contexts/store.jsx';
import UserStore from './contexts/UserStore.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  //Strictmode make it to execute twice
  // <React.StrictMode>
  <Store>
    <UserStore>
    <App />
    </UserStore>
    </Store>
    
  // </React.StrictMode>,
)

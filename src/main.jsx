import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { QueryClient, QueryClientProvider } from 'react-query';
  let queryClint=new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClint}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>,
)

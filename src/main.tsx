import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import App from './components/app/App'

const element = document.getElementById('root')

const component = (  
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(element!).render(component)

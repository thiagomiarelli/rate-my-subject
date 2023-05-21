import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import './index.css'

// pages
import App from './App'

// context
import {AuthProvider} from './context/authContext'
import {QueryProvider} from './context/searchContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
)

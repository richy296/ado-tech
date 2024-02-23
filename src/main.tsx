import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom';
import { AdoTechApp } from './AdoTechApp.tsx'
import { Provider } from 'react-redux';
import { store } from './store';
import './styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <AdoTechApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
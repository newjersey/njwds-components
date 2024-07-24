import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import "../../stencil-library/dist/stencil-library/css/styles.css"
import { setAssetPath } from 'stencil-library/dist/components';

setAssetPath(window.location.href)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

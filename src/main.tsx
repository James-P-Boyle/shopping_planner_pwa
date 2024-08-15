import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/scss/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/shopping_planner_pwa/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)

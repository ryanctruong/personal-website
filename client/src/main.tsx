import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/work-sans'
import './index.css'
import App from './App.tsx'

void fetch('/api/visit', { method: 'POST' }).catch(() => {
  // A failed tracking request should never interrupt the page.
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

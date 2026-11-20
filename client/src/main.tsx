import { StrictMode } from 'react'
import { MotionConfig } from 'motion/react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/work-sans'
import './index.css'
import App from './App.tsx'

void fetch('/api/visit', { method: 'POST' }).catch(() => {
  // A failed tracking request should never interrupt the page.
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)

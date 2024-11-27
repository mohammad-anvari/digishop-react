import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App'
import "./tailwind.css"
import "./Css/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

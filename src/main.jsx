import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProp from "./context/ContextProp"

createRoot(document.getElementById('root')).render(
    <ContextProp>
        <App />
    </ContextProp>
)

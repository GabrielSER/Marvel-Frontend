import './index.css'
import { createRoot } from 'react-dom/client'
import Main from './pages/main/Main'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Main />)

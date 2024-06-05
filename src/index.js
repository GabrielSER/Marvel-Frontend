import './index.css'
import { createRoot } from 'react-dom/client'
import MainBody from './pages/common/MainBody'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<MainBody />)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
    position: 'top left',
    timeout: 3000, // 3 seconds
    offset: '50px',
    type: 'success',
    transition: 'scale'
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
    </AlertProvider>,
    document.getElementById('root')
)


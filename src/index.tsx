import React from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.scss'
import App from './components/App/App'

console.log('1231323')
const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}
const container = createRoot(root)

container.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

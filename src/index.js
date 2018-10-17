import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'mobx-react'
import Store from './store'
import App from './components/App'

const store = new Store() 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#foot')
)
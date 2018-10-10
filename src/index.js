import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'mobx-react'
import Store from './store'
import TodoList from './components/TodoList'

const store = new Store() 

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>, 
  document.querySelector('#foot')
)
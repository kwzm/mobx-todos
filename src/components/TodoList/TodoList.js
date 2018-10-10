import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import TodoHeader from '../TodoHeader'
import TodoView from '../TodoView'
import TodoFooter from '../TodoFooter'
import styles from './TodoList.css'

class TodoList extends Component {  
  render() {
    return (
      <div className={styles.todoList}>
        <TodoHeader />
        <TodoView />
        <TodoFooter />
      </div>
    )
  }
}

export default hot(module)(TodoList)
import React, { Component } from "react"
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import TodoItem from '../TodoItem'
import styles from './TodoView.css'

@inject(stores => ({
  todos: stores.store.todos,
  removeTodo: stores.store.removeTodo,
}))
@observer 
class TodoView extends Component {
  static propTypes = {
    todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, removeTodo } = this.props

    return (
      <ul className={styles.todoView}>
        { todos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            <TodoItem todo={todo} />
            <span className={styles.delete} onClick={e => removeTodo(todo)}>x</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default TodoView
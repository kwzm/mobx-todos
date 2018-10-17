import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import TodoHeader from '../TodoHeader'
import TodoView from '../TodoView'
import TodoFooter from '../TodoFooter'
import styles from './App.css'

class App extends Component {  
  render() {
    return (
      <div className={styles.app}>
        <TodoHeader />
        <TodoView />
        <TodoFooter />
      </div>
    )
  }
}

export default hot(module)(App)
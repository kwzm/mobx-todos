import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from './TodoFooter.css'

@inject(stores => ({
  left: stores.store.left,
}))
@observer
class TodoFooter extends Component {
  static propTypes = {
    left: PropTypes.number.isRequired,
  }

  render() {
    const { left } = this.props

    return <footer className={styles.todoFooter}>{left} item(s) unfinished</footer>
  }
}

export default TodoFooter
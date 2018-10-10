import { observable, action, computed } from 'mobx'

class Todo {
  id = Math.random()

  @observable title = ''
  
  @observable finished = false

  constructor(title) {
    this.title = title
  }

  @action.bound toggle() {
    this.finished = !this.finished
  }
}

class Store {
  @observable todos = [];

  @action.bound createTodo(title) {
    this.todos.unshift(new Todo(title))
  }

  @action.bound removeTodo(todo) {
    this.todos.remove(todo)
  }

  @computed get left() {
    return this.todos.filter(todo => !todo.finished).length
  }
}

export default Store
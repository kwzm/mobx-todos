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

  @observable filter = 'All'

  @action.bound createTodo(title) {
    this.todos.unshift(new Todo(title))
  }

  @action.bound removeTodo(todo) {
    this.todos.remove(todo)
  }

  @action.bound filterTodos(filter) {
    this.filter = filter
  }

  @computed get left() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @computed get filteredTodos() {
    switch(this.filter) {
      case 'Active':
        return observable(this.todos.filter(todo => !todo.finished))
      case 'Completed':
        return observable(this.todos.filter(todo => todo.finished))
      case 'All':
      default:
        return this.todos
    }
  }
}

export default Store
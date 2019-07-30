import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state ={
    todos: [
      {id: 1, content: 'Kupić Melko'},
      {id: 2, content: 'Zrobić pranie'},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  
  render() {
  return (
    <div className="Aptodo-app container">
      <h1 className="center blue-text">TODO LIST</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
  }
}

export default App;
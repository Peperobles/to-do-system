import React, { Component } from "react";
import Header from './components/layout/Header'
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dentist appointment",
        completed: true
      },
      {
        id: 3,
        title: "Dinner with friends",
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),    // Random id from uuid package
      title: title,
      completed: false  // Always false when added
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <div className="row">
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

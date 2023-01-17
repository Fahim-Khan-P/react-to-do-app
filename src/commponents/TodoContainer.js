import React from 'react';
import TodosList from './TodosList '
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'my first name',
        completed: true
      },
      {
        id: 2,
        title: 'my first name',
        completed: false
      },
      {
        id: 3,
        title: 'my first name',
        completed: true
      },
      {
        id: 4,
        title: 'my first name',
        completed: false
      }
    ],
  }


  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  delTodo = (id) => {
    this.setState(prevState => ({
      // deferent code mathod used then toturia
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer
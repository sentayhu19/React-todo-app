/* eslint-disable react/state-in-constructor,react/destructuring-assignment,
 react/destructuring-assignment,react/no-access-state-in-setstate
  */
import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    state ={
      todos: [
        {
          id: generate({ charset: alphanumeric }),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: generate({ charset: alphanumeric }),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: generate({ charset: alphanumeric }),
          title: 'Deploy to live server',
          completed: false,
        },
      ],

    };

    handleChange = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    addTodoItem = (title) => {
      console.log(this.state.todos);
      const newTodo = {
        id: generate({ charset: alphanumeric }),
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    };

    render() {
      return (
        <>
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={this.addTodoItem} />
              <TodosList
                todos={this.state.todos}
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo}
              />
            </div>
          </div>
        </>
      );
    }
}
export default TodoContainer;

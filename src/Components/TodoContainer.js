import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from "./InputTodo"
import randomString, { generate } from 'randomized-string'
import { alphanumeric } from 'randomized-string/lib/types';
class TodoContainer extends React.Component {
    state ={
      todos: [
        {
          id: generate({charset:alphanumeric}),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: generate({charset:alphanumeric}),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: generate({charset:alphanumeric}),
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

    delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
    
    };
    addTodoItem = title => {
      console.log(this.state.todos);
      const newTodo = {
        id:  generate({charset:alphanumeric}),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };
    render() {
      return (
        <>
          <Header />
          <InputTodo />
          <TodosList todos={this.state.todos} handleChangeProps={this.handleChange}  deleteTodoProps={this.delTodo} />
          <InputTodo addTodoProps={this.addTodoItem} />
        </>
      );
    }
}
export default TodoContainer;

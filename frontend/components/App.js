import TodoList from './TodoList';
import React from 'react';
import Form from './Form';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Milk Cat',
          id: 1,
          completed: false
        },
        {
          name: 'Bury Guppy',
          id: 2  ,
          completed: false
        },
        {
          name: 'Marry Goat',
          id:3,
          completed: false
        },
      ]
    };
  }
      
 



  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList todos={this.state.todos} /> 
        <Form/>
      </div>
    );
  }
}
import React from 'react';
import Todo from './Todo'
export default class TodoList extends React.Component {
  constructor(){
  super()
  }
  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map(todo => {
          return (<Todo key={todo.id} todo={todo} />);
        })}
      </div>
    );
  }
}

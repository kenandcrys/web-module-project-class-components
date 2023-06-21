import React from 'react'

export default class Todo extends React.Component {
  constructor(){
    super()

  }
  render() {
  const todo = this.props.todo;
  return (
    <div key={todo.id}>
      {todo.name} {todo.completed ? <span>- completed</span> : null}
    </div>
  );
}
}

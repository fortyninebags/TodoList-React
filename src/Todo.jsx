import React from 'react';

export default function Todo({todo,toggleTodo}) {
  const handleOnToggle = () => {
    toggleTodo(todo.id)
  }
  return (
      <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleOnToggle} />
        {todo.name}
      </label>
    </div>
  )
}

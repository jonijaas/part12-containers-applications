import React from "react";


const Todo = ({ todo, completeT, deleteT }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={deleteT(todo)}> Selete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={deleteT(todo)}> Delete </button>
        <button onClick={completeT(todo)}> Set as done </button>
      </span>
    </>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text}
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo

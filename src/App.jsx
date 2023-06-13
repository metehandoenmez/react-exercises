import React from "react";
import TodoList from "./TodoList";

export default function App() {
  const todoList = (items, handleRemove) => (
    <ul>
      {items.map((item, index) => (
        <li key={item + index}>
          {item}
          <button onClick={() => handleRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <TodoList render={todoList} />
    </div>
  );
}

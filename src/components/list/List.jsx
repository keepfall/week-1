import React from 'react';
import './style.css';
import Todo from '../todo/Todo.jsx';

const List = ({ title, todo, setTodo }) => {
  const onClickDelete = (key) => {
    const newTodo = todo.filter((item) => item.key !== key);
    setTodo(newTodo);
  };

  const onClickcComplete = (key) => {
    const newTodo = todo.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return { ...item };
      }
    });
    setTodo(newTodo);
  };

  return (
    <div className="list">
      <h2>{title}</h2>
      <div className="list-item">
        {todo.map((todo) => (
          <Todo todo={todo} key={todo.key} onClickDelete={onClickDelete} onClickcComplete={onClickcComplete} />
        ))}
      </div>
    </div>
  );
};

export default List;

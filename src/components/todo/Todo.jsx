import React from 'react';
import './style.css';

//map, filter, 화살표 함수
const Todo = ({ todo, onClickDelete, onClickcComplete }) => {
  return (
    <div className="todo">
      <div className="todo-container">
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
        <div className="button-set">
          <button className="todo-delete-button button" onClick={() => onClickDelete(todo.key)}>
            삭제하기
          </button>
          <button className="todo-complete-button button" onClick={() => onClickcComplete(todo.key)}>
            {todo.isDone ? '취소' : '완료'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

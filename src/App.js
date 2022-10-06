import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState();
  const [todoList, setTodoList] = useState([{ id: 1, title: '리액트를 배워봅시다.' }]);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: todoList.length + 1, title: state }]);
  };

  return (
    <div className="layout">
      <form className="input" onSubmit={onSubmit}>
        <input type="text" name="body" onChange={onChange} />
        <button type="submit">추가하기</button>
      </form>
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="todo">
        {todoList.map((todo) => {
          return (
            <div className="box" key={todo.id}>
              <div>{todo.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

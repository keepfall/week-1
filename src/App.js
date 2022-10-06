import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState();
  const [todoList, setTodoList] = useState(['리액트를 배워봅시다.']);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, state]);
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
        {todoList.map((todoList) => {
          return (
            <div className="box">
              <div>{todoList}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

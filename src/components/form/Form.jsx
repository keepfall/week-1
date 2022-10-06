import React from 'react';
import { useState } from 'react';
import './style.css';

function Form({ todo, setTodo }) {
  const empty = {
    key: 0,
    title: '',
    body: '',
    isDone: false,
  };

  const [myTodo, setMyTodo] = useState(empty);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setMyTodo({ ...myTodo, [name]: value });
  };

  let number = 3;
  const onClickHandler = (event) => {
    event.preventDefault();
    setTodo([...todo, { ...myTodo, key: number }]);
    setMyTodo(empty);
    number++;
  };

  return (
    <form className="form" onSubmit={onClickHandler}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input className="form-input" type="text" name="title" onChange={onChangeHandler} value={myTodo.title} />
        <label className="form-label">내용</label>
        <input className="form-input" type="text" name="body" onChange={onChangeHandler} value={myTodo.body} />
      </div>
      <button className="form-button" type="submit">
        추가하기
      </button>
    </form>
  );
}

export default Form;

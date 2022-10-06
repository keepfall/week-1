import React, { useState } from 'react';
import Layout from '../components/layout/Layout.jsx';
import Header from '../components/header/Header.jsx';
import Form from '../components/form/Form.jsx';
import List from '../components/list/List.jsx';

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      key: 1,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
    {
      key: 2,
      title: '알고리즘 공부하기',
      body: '알고리즘 기초를 공부해봅시다.',
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form todo={todoList} setTodo={setTodoList} />
      <List title="Working.. 🔥" todo={todoList.filter((item) => (item = !item.isDone))} setTodo={setTodoList} />
      <List title="Done..! 🎉" todo={todoList.filter((item) => (item = item.isDone))} setTodo={setTodoList} />
    </Layout>
  );
};

export default TodoList;

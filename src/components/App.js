import React from 'react';
import Footer from './footer';
import VisibleTodoList from '../containers/visibleTodoList';
import AddTodo from '../containers/addTodo';
import '../css/App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

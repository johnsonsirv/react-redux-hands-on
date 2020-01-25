import React from 'react';
import Footer from './footer';
import VisibleTodoList from '../containers/visibleTodoList';
import '../css/App.css';

const App = () => (
  <div>
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

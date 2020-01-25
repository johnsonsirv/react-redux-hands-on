import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import { VisibilityFilters } from './actions/action';

const initialSate = {
  VisibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      id: Math.ceil(Math.random() * 10),
      text: 'Default todo is to test my app',
      completed: false,
    },
  ],
};
const store = createStore(rootReducer, initialSate);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

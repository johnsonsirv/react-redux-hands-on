import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters, deleteTodo } from '../actions/action';
import TodoList from '../components/todoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  },
  onRemoveTodo: id => {
    dispatch(deleteTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;

import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/action';

const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log('reducer action recieved this filter', action.filter);
      console.log('state in filter  reducer', state);
      return action.filter;
    default:
      return state;
  }
};

export default VisibilityFilter;

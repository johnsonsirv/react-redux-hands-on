import React from 'react';
import FilterLink from '../containers/filterLink';
import { VisibilityFilters } from '../actions/action';

const Footer = () => (
  <p>
    Show:
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Completed</FilterLink>
  </p>
);

export default Footer;

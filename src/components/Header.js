import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpensesSummary from './ExpensesSummary';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create expense </NavLink>
    <ExpensesSummary />
  </header>
);

export default Header;
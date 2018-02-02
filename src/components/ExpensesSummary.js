import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectedExpenses from '../selectors/expenses';

import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenseCount} expense{props.expenseCount !== 1 && 's'} totalling {
        numeral(props.expensesTotal / 100).format('$0,0.00')
      }.
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: selectedExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectedExpenses(state.expenses, state.filters))
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
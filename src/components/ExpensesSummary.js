import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenseCount} expenses totalling {
        numeral(props.expensesTotal / 100).format('$0,0.00')
      }.
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: state.expenses.length,
    expensesTotal: selectExpensesTotal(state.expenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
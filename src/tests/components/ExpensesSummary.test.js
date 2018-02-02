import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with three expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={expenses.length} 
      expensesTotal={selectExpensesTotal(expenses)} 
    />
  );
  expect(wrapper).toMatchSnapshot();
}); 
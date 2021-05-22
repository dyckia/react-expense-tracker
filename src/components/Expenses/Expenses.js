import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredItems = props.items.filter(item => (
    item.date.getFullYear().toString() === filteredYear
  ));

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onFilterChange={filterChangeHandler} 
      />
      <ExpensesChart items={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
}

export default Expenses;
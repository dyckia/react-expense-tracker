import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleFormHandler() {
    setIsEditing(prevState => !prevState);
  }

  return (
    <div className="new-expense">
      {!isEditing &&
        <button onClick={toggleFormHandler}>Add New Expense</button>
      }
      {isEditing &&
        <ExpenseForm 
          onAddNewItem={props.onAddNewItem} 
          onButtonClick={toggleFormHandler}
        />
      }
    </div>
  );
}

export default NewExpense;
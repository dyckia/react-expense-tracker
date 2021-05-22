import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  // event.target.value is always a string, no matter what type the input is
  const [enteredAmount, setEnteredAmount] = useState('');
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState('');
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  // can also group the three states into one object
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });
  // function titleChangeHandler(event) {
  //   // should pass in a function since the new state is dependent on prevState
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // }
  // function amountChangeHandler(event) {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: event.target.value }
  //   });
  // }
  // function dateChangeHandler(event) {
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: event.target.value }
  //   });
  // }

  function submitHandler(event) {
    // prevent submit action to send POST request
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate)
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onAddNewItem(newItem);
    props.onButtonClick();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number'
            min='0.01' 
            step='0.01' 
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type='date' 
            min='2019-01-01'
            max='2024-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onButtonClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import React, { useState } from 'react';

const App = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const DUMMY_EXPENSES = [
    {
      id: 'id1',
      date: new Date(2023, 10, 12),
      title: 'New Book',
      price: 30.99
    },
    {
      id: 'id2',
      date: new Date(2024, 10, 12),
      title: 'New Jeans',
      price: 99.99
    },
    {
      id: 'id3',
      date: new Date(2024, 0, 12),
      title: 'New Bag',
      price: 139.99
    }
  ]

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div id='expenses-container'>
      <div id='expenses-header'>
        <h2>Filter by year</h2>
        <select id="year-select" value={selectedYear} onChange={handleChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      {DUMMY_EXPENSES.filter(expense => expense.date.getFullYear().toString() === selectedYear).map(expense => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </div>
  );
} 

export default App;

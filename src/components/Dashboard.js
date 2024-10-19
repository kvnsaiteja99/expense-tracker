import React, { useState } from 'react';

const Dashboard = () => {
    const [income, setIncome] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = (e) => {
        e.preventDefault();
        if (expenseType) {
            setExpenses([...expenses, expenseType]);
            setExpenseType('');
        }
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <form onSubmit={addExpense}>
                <input type="text" placeholder="Source of Income" value={income} onChange={(e) => setIncome(e.target.value)} required />
                <input type="text" placeholder="Type of Expense" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} required />
                <button type="submit">Add Expense</button>
            </form>
            <ul>
                {expenses.map((exp, index) => (
                    <li key={index}>{exp}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

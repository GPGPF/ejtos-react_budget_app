import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency,budget,expenses,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("Budget cannot exceed more than 20000");
            return ;
        }
        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if(event.target.value < totalExpenses){
                alert("You cannot reduce the budget value lower than the spending");
               return ;
            }
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span className='me-2'>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
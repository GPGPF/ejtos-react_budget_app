import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span className='me-2'>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
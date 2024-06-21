import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        /* Add Budget component here */
                        // Budget component
                        <div className='col-sm col-md-4'>
                            <Budget />
                        </div>
                    }

                    {
                        /* Add Remaining component here*/
                                         //Remaining component
                    <div className='col-sm col-md-4'>
                    <Remaining/>
                </div>
                    }

                    {
                        /* Add ExpenseTotal component here */
                        <div className='col-sm col-md-4'>
                    <ExpenseTotal/>
                </div>
                    }

                    {
                        /* Add ExpenseList component here */
                        <div className='col-sm-12'>
                            <h2>Allocation</h2>
                    <ExpenseList/>
                </div>
                    }

                    {
                        /* Add ExpenseItem component here */
                    //    <div className="col-sm">
                    //     <ExpenseItem/>
                    //    </div>
                    
               
                    }

                    {
                        /* Add AllocationForm component here under */
                        <div className="col-sm">
                            <h2>Change Allocation</h2>
                            <AllocationForm/>
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;

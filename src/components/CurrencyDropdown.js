import React, { createRef, useContext } from 'react'
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);
    const handleChangeCurrency = (e) => {
        if(e.target.classList.contains("dropdown-item")){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: e.target.innerText.split(" ")[0] 
            })
            dropdownRef.current.classList.toggle("d-block");
        }
    }
    const dropdownRef = createRef();
    const handleToggle = (e) => {
        dropdownRef.current.classList.toggle("d-block");
    }

    return (

        <div className="btn-group mb-3">
            <button className="btn btn-success btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleToggle}>
                Large button
            </button>
            <ul className="dropdown-menu mt-2 bg-success" style={{ top: "100%", cursor:"pointer" }} ref={dropdownRef} onClick={handleChangeCurrency}>
                <li className="dropdown-item" href="/">&#36; Dollar</li>
                <li className="dropdown-item" href="/">&pound; Pound</li>
                <li className="dropdown-item" href="/">&euro; Euro</li>
                <li className="dropdown-item" href="/">&#8377; Rupee</li>
            </ul>
        </div>
    )
}

export default CurrencyDropdown;
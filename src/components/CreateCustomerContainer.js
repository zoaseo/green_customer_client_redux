import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setSubmit, goToHome } from '../modules/customers';
import CreateCustomer2 from './CreateCustomer2';
import { useNavigate } from 'react-router-dom';

const CreateCustomerContainer = () => {
    const addCustomer = useSelector(state=>state.customers.addCustomer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goToHome(navigate));
    }
    const onChange = (e) => {
        dispatch(setInput(e));
    }
    const onSubmit = () => {
        dispatch(setSubmit());
    }
    return (
        <div>
            <CreateCustomer2 onHome={onHome} onChange={onChange} onSubmit={onSubmit} addCustomer={addCustomer}/>
        </div>
    );
};

export default CreateCustomerContainer;
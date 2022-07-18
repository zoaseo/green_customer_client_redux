import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomers } from '../modules/customers';
import CustomerUi from './CustomerUi';

const CustomerContainer = () => {
    const { data, loading, error } = useSelector(state => state.customers.customers);
    const dispatch = useDispatch();
    // 컴포넌트 마운트 후 고객 목록 요청
    useEffect(()=>{
        dispatch(getCustomers());
    },[dispatch]);
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null;
    return (
        <div>
            <CustomerUi customers={data}/>
        </div>
    );
};

export default CustomerContainer;
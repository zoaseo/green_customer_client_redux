import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../config/conf';
 
const DetailCustomer = () => {
    async function getCustomers(no){
        const response = await axios.get(`${API_URL}/detailview/${no}`);
        return response.data;
    }  
    const { no } = useParams();
    const navigate = useNavigate();
    const [ state ] = useAsync(()=>getCustomers(no),[no]);
    const { loading, data:customer, error } = state;

    // 삭제하기
    const onDelete = () => {
        axios.delete(`${API_URL}/delCustomer/${no}`)
        .then(result=>{
            console.log("삭제되었습니다.");
            navigate("/"); // 리다이렉션 추가
        })
        .catch(e=>{
            console.log(e);
        })
    }

    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!customer) return <div>로딩중입니다.</div>
    return (
        <div>
            <h2>고객 상세 정보</h2>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>고객명</TableCell>
                        <TableCell>{customer.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>연락처</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>생년월일</TableCell>
                        <TableCell>{customer.birth}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>주소</TableCell>
                        <TableCell>{customer.add1}<br/>{customer.add2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <button onClick={onDelete}>삭제</button>
                            <button><Link to={`/editCustomer/${no}`}>수정</Link></button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default DetailCustomer;
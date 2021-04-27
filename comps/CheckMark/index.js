import React from 'react';
import styled from 'styled-components';
import { FaRegCheckCircle } from 'react-icons/fa';

const CheckCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .img {
        width: 120px;
        height: 120px; 
    }

`



const CheckMarkUI = () => {
    return <CheckCont>
        <FaRegCheckCircle className="img" color="#468329"></FaRegCheckCircle>
    </CheckCont>
}

export default CheckMarkUI;
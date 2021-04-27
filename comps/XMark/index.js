import { RiCloseCircleLine } from 'react-icons/ri'
import React from 'react'
import styled from 'styled-components'

const XCont = styled.div `
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

const XMarkUI = () => {
    return <XCont>
        <RiCloseCircleLine className="img" color="#FF6464"></RiCloseCircleLine>
    </XCont>
}

export default XMarkUI;
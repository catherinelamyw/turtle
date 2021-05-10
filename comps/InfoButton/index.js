import { AiFillInfoCircle } from 'react-icons/ai'
import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router';

const InfoButtonCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .img {
        width: 45px;
        height: 45px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        color: #FFE9A7;
        border-radius: 15px;
    }

`

const InfoButtonUI = ({
    routeTo="/info",
}) => {
    const router = useRouter();
    return <InfoButtonCont>
        <AiFillInfoCircle className="img" onClick={()=>router.push(routeTo)}></AiFillInfoCircle>
    </InfoButtonCont>
}

export default InfoButtonUI;
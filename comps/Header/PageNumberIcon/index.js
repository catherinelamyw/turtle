import React from 'react'
import styled from 'styled-components'
import WhiteTextUI from '../../WhiteText'

const NumberCont = styled.div  `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 22px;

`
const CircleNumber = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    color: white;
`   

const NumberIcon = ({
    menucolor="white",
    number="1",
    text="Page"
}) => {
    return <NumberCont menucolor={menucolor}>
        <CircleNumber>{number}</CircleNumber>
        <WhiteTextUI text={text} fontsize="16" />
    </NumberCont>
}

export default NumberIcon
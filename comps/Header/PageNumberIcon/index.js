import React from 'react'
import styled from 'styled-components'
import WhiteTextUI from '../../WhiteText'

const NumberCont = styled.div  `
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding:5px;
    max-width:300px;
    &>* {
        color:#FFF;
      }
    align-items: center;
    margin-top: 22px;
    height: auto;
    width: auto;
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
    number="1",
    text="Page",
}) => {
    return <NumberCont>
        <CircleNumber>{number}</CircleNumber>
        <WhiteTextUI text={text} fontsize="16"></WhiteTextUI>
    </NumberCont>
}

export default NumberIcon;
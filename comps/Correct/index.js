import CheckMarkUI from '../CheckMark';
import React from 'react';
import styled from 'styled-components';
import ButtonUI from '../Button';
import WhiteTextUI from '../WhiteText';

const Box = styled.div`
    height: ${props=>props.height}px;
    width: ${props=>props.width}px;
    border-radius: 25px;
    background: #F0F0F0;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 30px;
`

const CorrectUI = ({
    height="674px",
    width="338px",
    text1="You picked:",
    text2="Choose environmentally- friendly cleaning products",
    text3="CORRECT!",
    text4="Look out for biodegradable products and avoid phosphates, chlorine, and artificial fragrances.",
    text5="Continue",
    routea="/messageb",
    routeb="/conclusion"
}) => {
    return <Box height={height} width={width}>
        <Text>
            <h2>{text1}</h2>
            <ButtonUI text={text2} bgcolor="#468329" routeTo={routea}></ButtonUI>
            <CheckMarkUI></CheckMarkUI>
            <WhiteTextUI text={text3} fontsize="36" fontcolor="#468329"/>
            <h3>{text4}</h3>
            <br/>
            <br/>
            <ButtonUI text={text5} width="120" bgcolor="#FFE9A7" routeTo={routeb}></ButtonUI>
        </Text>
    </Box>
}

export default CorrectUI;
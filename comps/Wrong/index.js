import XMarkUI from '../XMark';
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

const WrongUI = ({
    height="674px",
    width="338px",
    text1="You picked:",
    text2="Install a food garbage disposal in your sink",
    text3="WRONG!",
    text4="Pesticides from food will harm marine life if the sewer drains reach the ocean.",
    text5="Try Again",
    routea="/messagea",
    routeb="/yellow2M"
}) => {
    return <Box height={height} width={width}>
        <Text>
            <h2>{text1}</h2>
            <ButtonUI text={text2} bgcolor="#FF6464" routeTo={routea}></ButtonUI>
            <XMarkUI></XMarkUI>
            <WhiteTextUI text={text3} fontsize="36" fontcolor="#FF6464"/>
            <h3>{text4}</h3>
            <br/>
            <br/>
            <ButtonUI text={text5} width="120" bgcolor="#FFE9A7" routeTo={routeb}></ButtonUI>
        </Text>
    </Box>
}

export default WrongUI;
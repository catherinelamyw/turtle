import React from 'react';
import styled from 'styled-components';
import ButtonUI from '../Button';
import WhiteTextUI from '../WhiteText';

const Box = styled.div`
    height: ${props=>props.height}px;
    width: ${props=>props.width}px;
    background: #FFFFFF;
    border: 3px solid #FFE9A7;
    filter: drop-shadow(25px 25px 5px rgba(0, 0, 0, 0.25));
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    align-items: center;
    text-align: center;
    padding: 30px;
    height: 500px;
    width: 290px;
    line-height: 22px;
`

const InfoUI = ({
    height="350px",
    width="177px",
    text1="Team Members",
    text2="Catherine",
    text3="Farbod",
    text4="Matteo",
    text5="Topics",
    text6="Social Awareness",
    text7="Climate Change",
    text8="Goals",
    text9="To educate using interactive storytelling",
    text10="Close",
    routeb="/"
}) => {
    return <Box height={height} width={width}>
        <Text>
            <h3>{text1}</h3>
            <WhiteTextUI fontcolor='#242C3C' text={text2}/>
            <WhiteTextUI fontcolor='#242C3C' text={text3}/>
            <WhiteTextUI fontcolor='#242C3C' text={text4}/><br/>
            <h3>{text5}</h3>
            <WhiteTextUI fontcolor='#242C3C' text={text6}/>
            <WhiteTextUI fontcolor='#242C3C' text={text7}/><br/>
            <h3>{text8}</h3>
            <WhiteTextUI fontcolor='#242C3C' text={text9}/>
        </Text>
        <br/>
        <br/>
        <br/>
        <br/>
        <ButtonUI text={text10} width="240" bgcolor="#FFE9A7" routeTo={routeb}></ButtonUI>
    </Box>
}

export default InfoUI;
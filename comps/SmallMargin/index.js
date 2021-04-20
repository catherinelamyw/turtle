import React from 'react';
import styled from 'styled-components';
import WhiteTextUI from '../WhiteText';
import ButtonUI from '../Button';

const BlueBox = styled.div`
  width:375px;
  height:${props=>props.height}px;
  background-color:#242C3C;
  border-radius:20px 20px 0 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
`

const MarginUI = ({
  text="What should we do?",
  buttona="eat",
  buttonb="swim",
  routea="/",
  routeb="/",
  routec="/",
  
}) => {
  return <BlueBox>
    <WhiteTextUI text={text}></WhiteTextUI>
    <ButtonUI text={buttona} routeTo={routea}></ButtonUI>
    <ButtonUI text={buttonb} routeTo={routeb}></ButtonUI>
  </BlueBox>
}

export default MarginUI;
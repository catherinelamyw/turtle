import React from 'react';
import styled from 'styled-components';
import ButtonUI from '../Button';

const SmallBlueBox = styled.div`
  width: 100vw;
  height:${props=>props.height}px;
  background-color:#242C3C;
  border-radius:20px 20px 0 0;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding:20px;
`

const ConfirmFooterUI = ({
    buttona="Confirm",
    buttoncolor="#FFE9A7",
    width="120",
    routeTo="/"
  }) => {
    return <SmallBlueBox>
      <ButtonUI text={buttona} bgcolor={buttoncolor} width={width}  routeTo={routeTo}/>
    </SmallBlueBox>
  }
  
  export default ConfirmFooterUI;
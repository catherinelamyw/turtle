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
const ButtonCont = styled.span`
  margin:5px;
`

const ButtonInput = styled.button`
  background-color:${props=>props.background};
  font-size:16px;
  font-weight:700;
  color:#242C3C;
  border-radius:22px;
  border:none;
  width:${props=>props.width}px;
  height:auto;
  margin:10px;
  padding:15px;
  box-shadow: 0px 3px 5px #555;
`;

const ConfirmQuiz = ({
    buttona="Confirm",
    buttoncolor="#FFE9A7",
    width="120",
    setModalDisplay
  }) => {
    return <SmallBlueBox>
        <ButtonCont onClick={() => setModalDisplay(true)}>
            <ButtonInput background={buttoncolor} width={width}>{buttona}</ButtonInput>
        </ButtonCont>
    </SmallBlueBox>
  }
  
  export default ConfirmQuiz;
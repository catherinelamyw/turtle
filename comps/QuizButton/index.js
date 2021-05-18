import React from 'react';
import styled from 'styled-components';

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

const QuizButton = ({
  text="Test Button",
  width="295",
  setSelectedAnswer,
  selectedAnswer,
  id
}) => {
    var buttonColor = ""
    if (selectedAnswer === id) {
        buttonColor = "#F0F0F0";
    } else {
        buttonColor = "#FFE9A7";
    }
  return <ButtonCont onClick={()=> setSelectedAnswer(id)}>
    <ButtonInput background={buttonColor} width={width}>
      {text}
    </ButtonInput>
  </ButtonCont>
}

export default QuizButton
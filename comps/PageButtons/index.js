import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonCont = styled.span`
  margin:5px;
`

const ButtonInput = styled.button`
  border: 2px solid;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  margin: 5px;
  background-color: #88A7BC;
  color: #f0f0f0;
`;

const PageButton = ({
  text = "1",
  onClick = () => { }
}) => {
  return <ButtonCont onClick={onClick}>
    <ButtonInput>{text}</ButtonInput>
  </ButtonCont>
}

export default PageButton
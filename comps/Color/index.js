import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width:30px;
  height:30px;
  background-color:${prop=>prop.color};
  border-radius:50%;
  border:3px solid white;
`

const ColorUI = ({
  color="#468329"
}) => {
  return <Circle color={color}>
    </Circle>
}

export default ColorUI;
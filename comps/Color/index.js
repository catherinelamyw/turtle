import React from 'react';
import styled from 'styled-components';

const ColorsCont = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`

const Circle = styled.div`
  width:30px;
  height:30px;
  background-color:${prop=>prop.color};
  border-radius:50%;
  border:${prop=>prop.border}px solid white;
`

const ColorUI = ({
  border="3",
  onGrnClick=()=>{},
  onBrnClick=()=>{},
  onBlkClick=()=>{},
}) => {

  return (
  <ColorsCont>
    <Circle color="#468329" border={border} onClick={onGrnClick}/>
    <Circle color="#8C6239" border={border} onClick={onBrnClick}/>
    <Circle color="#272C3B" border={border} onClick={onBlkClick}/>
  </ColorsCont>
  )
}

export default ColorUI;
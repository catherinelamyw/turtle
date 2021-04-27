import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.h1`
  font-family:Merriweather, serif;
  font-size:${props=>props.fontsize}px;
  font-weight:700;
  color:${props=>props.color};
  text-align:center;
  padding:5px;
  max-width:375px;
  overflow-wrap:wrap;
`
const HeadingUI = ({
  text="Filler",
  fontsize="36",
  fontcolor="#F0F0F0"
}) => {
  return <Paragraph fontsize={fontsize} color={fontcolor}>
    {text}
  </Paragraph>
}

export default HeadingUI;
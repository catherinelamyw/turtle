import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size:${props => props.fontsize}px;
  color:${props => props.color};
  text-align:center;
  padding:5px;
  max-width:${props => props.maxwidth}px;
  overflow-wrap:wrap;
`
const WhiteTextUI = ({
  text = "Filler",
  fontsize = "18",
  fontcolor = "#F0F0F0",
  parwidth = "375"
}) => {
  return <Paragraph fontsize={fontsize} maxwidth={parwidth} color={fontcolor}>
    {text}
  </Paragraph>
}

export default WhiteTextUI;
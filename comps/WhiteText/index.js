import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family:sans-serif;
  font-size:18px;
  font-weight:700;
  color:#F0F0F0;
  text-align:center;
  padding:5px;
  max-width:375px;
  overflow-wrap:wrap;
`
const WhiteTextUI = ({
  text="Filler"
}) => {
  return <Paragraph>
    {text}
  </Paragraph>
}

export default WhiteTextUI;
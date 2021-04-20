import React from 'react';
import styled from 'styled-components';
import SmallButtonUI from '../SmallButton';

const SmallBlueBox = styled.div`
  width:375px;
  height:${props=>props.height}px;
  background-color:#242C3C;
  border-radius:20px 20px 0 0;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding:20px;
`

const FooterUI = ({
    buttona="Back",
    buttonb="Next",
    routea="/",
    routeb="/",
  }) => {
    return <SmallBlueBox>
      <SmallButtonUI text={buttona} routeTo={routea}></SmallButtonUI>
      <SmallButtonUI text={buttonb} routeTo={routeb}></SmallButtonUI>
    </SmallBlueBox>
  }
  
  export default FooterUI;
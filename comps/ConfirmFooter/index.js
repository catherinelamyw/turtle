import React from 'react';
import styled from 'styled-components';
import SmallButtonUI from '../SmallButton';
import SmallButtonInput from '../SmallButton';

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

const ConfirmFooterUI = ({
    buttona="Confirm",
  }) => {
    return <SmallBlueBox>
      <SmallButtonUI text={buttona}><SmallButtonInput background='#FFE9A7'></SmallButtonInput></SmallButtonUI>
    </SmallBlueBox>
  }
  
  export default ConfirmFooterUI;
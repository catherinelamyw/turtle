import React from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';

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
`;

const ButtonUI = ({
  text="Test Button",
  bgcolor="#C8E0F0",
  // routeTo="/home",
  width="295",
}) => {
  // const router = useRouter();
  return <ButtonCont /*onClick={()=>router.push(routeTo)}*/>
    <ButtonInput background={bgcolor} width={width}>
      {text}
    </ButtonInput>
  </ButtonCont>
}

export default ButtonUI
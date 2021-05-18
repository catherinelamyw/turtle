import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
  margin:5px;
`

const ButtonInput = styled.button`
  background-color:${props=>props.background};
  font-family: 'Roboto', sans-serif;
  font-size:16px;
  font-weight:700;
  color:#242C3C;
  border-radius:22px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  width:${props=>props.width}px;
  height:auto;
  margin:10px;
  padding:15px;
  box-shadow: 0px 3px 5px #555;
`;

const ButtonUI = ({
  text="Test Button",
  bgcolor="#FFE9A7",
  routeTo="/",
  width="295"
}) => {
  const router = useRouter();
  return <ButtonCont onClick={()=>router.push(routeTo)}>
    <ButtonInput background={bgcolor} width={width}>
      {text}
    </ButtonInput>
  </ButtonCont>
}

export default ButtonUI
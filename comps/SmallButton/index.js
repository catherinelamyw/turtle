import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const SmallButtonCont = styled.span`
  margin:5px;
`
const SmallButtonInput = styled.button`
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

const SmallButtonUI = ({
    text="Back",
    bgcolor="#C8E0F0",
    routeTo="/",
    width="122",
  }) => {
    const router = useRouter()
    return <SmallButtonCont onClick={()=>router.push(routeTo)}>
      <SmallButtonInput background={bgcolor} width={width}>
        {text}
      </SmallButtonInput>
    </SmallButtonCont>
  }
  
  export default SmallButtonUI
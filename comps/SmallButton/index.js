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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding:15px;
`;

const SmallButtonUI = ({
    text="Back",
    bgcolor="#FFE9A7",
    routeTo="/",
    width="122",
  }) => {
    const router = useRouter()
    return <SmallButtonCont onClick={()=>{
      console.log(router.pathname)
      if (router.pathname === routeTo) {
        router.reload()
      } else {
        router.push(routeTo)
      }
    }}>
      <SmallButtonInput background={bgcolor} width={width}>
        {text}
      </SmallButtonInput>
    </SmallButtonCont>
  }
  
  export default SmallButtonUI
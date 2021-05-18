import React from 'react';
import styled from 'styled-components';

const Textbox = styled.input`
  background-color:#FFE9A7;
  font-family: 'Roboto', sans-serif;
  border-radius:22px;
  height:45px;
  width:295px;
  border:none;
  text-align:center;
  box-shadow: 0px 3px 5px #555;
`
const TextboxUI = () => {
  return <Textbox type="text" placeholder="Shelly"></Textbox>
}

export default TextboxUI;
import styled from 'styled-components';
import ButtonUI from '../../Button';
import {HiMenu} from 'react-icons/hi'
import React, {useState} from 'react';

const HamCont = styled.div``

const MenuIcon = styled.div``

const MenuItems = styled.div`
  display:flex;
  flex-direction:column;
  max-height:${props=>props.height}px;
  opacity:${props=>props.opacity};
  overflow:hidden;
  transition:opacity 0.5s, max-height 0.5s;
`;

const HamIcon = () => {
  const [open, setOpen] = useState(false);

  var opacity = 0, height = 0;
  if(open){
    opacity = 1;
    height = 468;
  }

  return <HamCont>
    <MenuIcon onClick={()=>setOpen(!open)}>
        <HiMenu color='#fff' size='50px'/>
    </MenuIcon>
    <MenuItems opacity={opacity} height={height}>
      <ButtonUI text="Home" routeTo='/'/>
      <ButtonUI text="Customize" routeTo='/customize'/>
      <ButtonUI text="How To Play" routeTo='/howtoplay'/>
      <ButtonUI text="How To Help" routeTo='/howtohelp'/>
      <ButtonUI text="Facts" routeTo='/facts'/>
      <ButtonUI text="Quiz" routeTo='quiz'/>
    </MenuItems>
  </HamCont>
}

export default HamIcon;
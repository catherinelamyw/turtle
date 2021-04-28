import styled from 'styled-components'
import React, {useState} from 'react'
import PageButton from '../PageButtons'

const MenuCont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const RowCont = styled.div`
  display:flex;
`  

const FactsMenu = ({
  onOneClick=()=>{},
  onTwoClick=()=>{},
  onThreeClick=()=>{},
  onFourClick=()=>{},
  onFiveClick=()=>{},
  onSixClick=()=>{},
  onSevenClick=()=>{},
  onEightClick=()=>{},
  onNineClick=()=>{},
  onTenClick=()=>{},
  onElevenClick=()=>{},
  onTwelveClick=()=>{},
  onThirteenClick=()=>{},
  onFourteenClick=()=>{},
  onFifteenClick=()=>{},
  onSixteenClick=()=>{},
}) => {
  return <MenuCont>
    <RowCont>
      <PageButton onClick={onOneClick} text='1'/>
      <PageButton onClick={onTwoClick} text='2'/>
      <PageButton onClick={onThreeClick} text='3'/>
      <PageButton onClick={onFourClick} text='4'/>
      <PageButton onClick={onFiveClick} text='5'/>
    </RowCont>
    <RowCont>
      <PageButton onClick={onSixClick} text='6'/>
      <PageButton onClick={onSevenClick} text='7'/>
      <PageButton onClick={onEightClick} text='8'/>
      <PageButton onClick={onNineClick} text='9'/>
      <PageButton onClick={onTenClick} text='10'/>
      <PageButton onClick={onElevenClick} text='11'/>
    </RowCont>
    <RowCont>
      <PageButton onClick={onTwelveClick} text='12'/>
      <PageButton onClick={onThirteenClick} text='13'/>
      <PageButton onClick={onFourteenClick} text='14'/>
      <PageButton onClick={onFifteenClick} text='15'/>
      <PageButton onClick={onSixteenClick} text='16'/>
    </RowCont>
  </MenuCont>
}

export default FactsMenu
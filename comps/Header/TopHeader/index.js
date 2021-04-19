import React from 'react'
import styled from 'styled-components'
import HamburgerIcon from '../HamburgerIcon'



const HeaderCont = styled.div`
    font-family:sans-serif;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #242C3C;
    height: ${props=>props.height}px;
    width: ${props=>props.width};
    opacity: ${props=>props.opacity};
    transition: 1s;
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }
    z-index: 1;
    position: absolute;
    overflow: hidden;


`
//
const MenuCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    
`

const HeaderArrow = styled.div`
    height: 20px;
    width: 20px;
    margin: 20px 0px 0px 15px;
    border-left: 5px solid ; 
    border-top: 5px solid ;
    transform: ${props=>props.arrowrotation};
    
    
    
`

const HeaderText = styled.h4`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 250px;
    
    

`
const HeaderTextCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
   
`

const HeaderTextFacts = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const HeaderUI = ({
    menucolor="#fff",
    arrowrotation="rotate(0deg)",
    text1="text",
    text2="text",
    text3="text",
    text4="text",
    text5="text",
    height="155px",
    width="375px",
    opacity="1",
    onClick = () =>{},
    onHamClick =() =>{}
    
}) =>{
    return <HeaderCont height={height} width={width} opacity={opacity} >
        <MenuCont>
            <HamburgerIcon menucolor={menucolor} onHamClick={onHamClick} />
            <HeaderArrow arrowrotation={arrowrotation} onClick={onClick} />
        </MenuCont>
        <HeaderTextCont>
            <HeaderText >
                {text1}
                <br/>
                {text2}
                <br/>
                {text3}
                <br/>
            </HeaderText>
            <HeaderTextFacts>
                {text4}
            </HeaderTextFacts>
            <HeaderText>
                {text5}
            </HeaderText>
        </HeaderTextCont>
        
    </HeaderCont>
}

export default HeaderUI
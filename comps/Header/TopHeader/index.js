import React from 'react'
import styled from 'styled-components'
import HouseIcon from '../HouseIcon'
import ArrowIcon from '../ArrowIcon'
import WhiteTextUI from '../../WhiteText'
import NumberIcon from '../PageNumberIcon'



const HeaderCont = styled.div`
    font-family:sans-serif;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Roboto', sans-serif;
    line-height: 20px;
    background-color: #242C3C;
    height: ${props => props.height}px;
    width: 100vw;
    opacity: ${props => props.opacity};
    transition: 1s;
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }
    overflow: hidden;
    z-index: 1;


`
//
const MenuCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    min-height: 150px;
    min-width: 50px;
    
`


const HeaderText = styled.p`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 250px;
    font-size:${props => props.fontsize}px;
    
    

`
const HeaderTextCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 18px;
   
`

const HeaderTextFacts = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    
`

const HeaderUI = ({
    menucolor = "#fff",
    text1 = "text",
    text2 = "text",
    text3 = "text",
    text4 = "text",
    text5 = "text",
    height = "155px",
    width = "375px",
    opacity = "1",
    onClick = () => { },
    number = "1",

}) => {
    return <HeaderCont height={height} opacity={opacity} >
        <MenuCont>
            <HouseIcon menucolor={menucolor} />
            <WhiteTextUI text="Home" fontsize="12" />
        </MenuCont>
        <HeaderTextCont>
            <HeaderText fontsize="16" >
                {text1}
                <br />
                {text2}
                <br />
                {text3}
                <br />
            </HeaderText>
            <ArrowIcon onClick={onClick} />
            <HeaderTextFacts>
                {text4}
            </HeaderTextFacts>
            <HeaderText fontsize="14" >
                {text5}
            </HeaderText>
        </HeaderTextCont>
        <NumberIcon number={number} />

    </HeaderCont>
}

export default HeaderUI
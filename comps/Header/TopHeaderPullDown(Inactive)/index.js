import React from 'react'
import styled from 'styled-components'

const HeaderCont = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    background-color: #242C3C;
    opacity: 0.8;
    height: ${props=>props.height};
    width: ${props=>props.width};
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }
    visibility: ${props=>props.visibility};


`
//
const MenuCont = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0px 0px 0px;

`

const HeaderMenuBar = styled.div`
    width: 32px;
    height: 5px;
    margin: 3px 0px 3px 10px;
    background-color: ${props=>props.menucolor};
    
`
//
const HeaderArrowcont = styled.div`
    display: flex;
    flex-direction: column;
    height: 568px;
    justify-content: flex-end;
`

const HeaderArrow = styled.div`
    height: 20px;
    width: 20px;
    margin: 20px 0px 0px 15px;
    border-left: 5px solid ; 
    border-top: 5px solid ;
    transform: ${props=>props.arrowrotation};
    
`
//
const HeaderTextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 70px;
    padding: 0px 0px 0px 10px;
`


const HeaderText = styled.h4`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 250px;
    height: 110px;
    margin: 0px;
`
const HeaderTextFacts = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 110px;
    margin: 0px;
`


const HeaderPullDownUI = ({
    visibility="visible",
    menucolor="#fff",
    arrowrotation="rotate(0deg)",
    text1="text",
    text2="text",
    text3="text",
    height="155px",
    width="365px",
}) =>{
    return <HeaderCont height={height} width={width} visibility={visibility}>
        <MenuCont>
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderArrowcont>
                <HeaderArrow arrowrotation={arrowrotation} />
            </HeaderArrowcont>
        </MenuCont>
        <HeaderTextCont>
            <HeaderText>{text1}</HeaderText>
            <HeaderTextFacts> The Facts</HeaderTextFacts>
            <HeaderText>{text2}</HeaderText>
            <HeaderText>{text3}</HeaderText>
        </HeaderTextCont>
    </HeaderCont>
}

export default HeaderPullDownUI
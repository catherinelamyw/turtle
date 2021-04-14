import React from 'react'
import styled from 'styled-components'

const HeaderCont = styled.div`
    font-family:sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #242C3C;
    height: ${props=>props.height};
    width: ${props=>props.width};
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }


`
//
const MenuCont = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderMenuBar = styled.div`
    width: 32px;
    height: 5px;
    margin: 3px 0px 3px 10px;
    background-color: ${props=>props.menucolor};
    
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 110px;
    margin: 0px 0px 0px 30px;
`
//


const HeaderUI = ({
    menucolor="#fff",
    arrowrotation="rotate(0deg)",
    text1="text",
    height="155px",
    width="365px",
}) =>{
    return <HeaderCont height={height} width={width} >
        <MenuCont>
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderMenuBar menucolor={menucolor} />
            <HeaderArrow arrowrotation={arrowrotation} />
        </MenuCont>
        <HeaderText>{text1}</HeaderText>
    </HeaderCont>
}

export default HeaderUI
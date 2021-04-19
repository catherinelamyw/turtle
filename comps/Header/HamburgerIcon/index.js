import React from 'react'
import styled from 'styled-components'
import {HiMenu} from 'react-icons/hi'

const HamburgerCont = styled.div `
    display: flex;
    flex-direction: column;

    .img {
        width: 52px;
        height: 52px;
        background-color: ${props=>props.menucolor};
        
    }

`



const HamburgerIcon = ({
    menucolor="#fff",
    onHamClick = () =>{}
}) => {
    return <HamburgerCont>
        <HiMenu className="img" menucolor={menucolor} onClick={onHamClick} />
    </HamburgerCont>
}

export default HamburgerIcon
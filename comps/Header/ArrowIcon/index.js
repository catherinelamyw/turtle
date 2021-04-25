import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {IoIosArrowDown} from 'react-icons/io'

const ArrowCont = styled.div  `
    display: flex;
    flex-direction: column;
    

    .img {
        height: 42px;
        width: 42px;
        color: ${props=>props.menucolor};
        transform: ${props=>props.arrowrotation};
    }

`


const ArrowIcon = ({
    menucolor="white",
    arrowrotation="rotate(90deg)",
    onClick = () =>{}
}) => {
    return <ArrowCont>
        <IoIosArrowDown className="img" menucolor={menucolor} onClick={onClick} arrowrotation={arrowrotation} />
    </ArrowCont>
}

export default ArrowIcon
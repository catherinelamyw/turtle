import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {BsFillHouseDoorFill} from 'react-icons/bs'

const HouseCont = styled.div  `
    display: flex;
    flex-direction: column;
    

    .img {
        height: 42px;
        width: 42px;
        color: ${props=>props.color};
    }

`


const HouseIcon = ({
    color="white",
    routeTo="/",
}) => {
    const router = useRouter();
    return <HouseCont onClick={()=>router.push(routeTo)}>
        <BsFillHouseDoorFill className="img" color={color} />

    </HouseCont>
}

export default HouseIcon
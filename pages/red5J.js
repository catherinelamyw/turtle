import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {poisioning} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    

    .die{
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
    }
    
`

export default function redintro(){

    const [heightstate, setheightstate] = useState(false)
    const [opacitystate, setopacitystate] = useState(false)
    const [rightstate, setrightstate] = useState(false)
    

    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }

    console.log("heightstate", heightstate)
    console.log("opacitystate", opacitystate)
    console.log("rightstate", rightstate)
    return <RedCont>
            <div className="header">
                <HeaderUI
                arrowrotation="rotate(225deg)"
                text1="Shelly mistakenly ate plastic  "
                text2="because it appeared and floated "
                text3="like jellyfish."
                text4="The Facts"
                text5="	The annual rate of sea turtle deaths on an average is about 1000 a year but this is a large underestimate "
                number="End"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={poisioning}>
                <Image
                    alt="dirty land"
                    src="/backgrounds/poisioning.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="die img" 
                    src="/drawings/_grn-die.png"
                    alt="turtle"
                    layout="responsive"
                    quality={10}
                    width={438}
                    height={322}
                />
                <FooterUI 
                    routea="/yellow2I"
                    routeb="/conclusion"
                />
    </RedCont>
}
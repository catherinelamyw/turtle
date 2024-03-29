import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {reality} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    
    
    
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
                text1="But this is what Shelly sees."
                text2="The  coral reefs have rotted from"
                text3="all the polution in the water."
                text4="The Facts"
                text5="	over 50 percent of the world’s coral reefs have died in the last 30 years and up to 90 percent may die within the next century very few pristine coral reefs still exist."
                number="End"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={reality}>
                <Image
                    alt="Harsh"
                    src="/backgrounds/reality.png"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <FooterUI 
                    routea="/red3Kcompar"
                    routeb="/yellow2M"
                />
    </RedCont>
}
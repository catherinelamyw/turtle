import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {expectation} from '../styles/redintro.module.css'
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
                text1="This is what Shelly expected to "
                text2="see at the coral reefs."
                text3=""
                text4="The Facts"
                text5="	Barrier or coral reefs get their name because they protect shallow warm waters from the open sea. This protection creates an important habitat for many types of tropical fish and rare plants."
                number="8-a"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={expectation}>
                <Image
                    alt="pretty corals"
                    src="/backgrounds/expectation.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <FooterUI 
                    routea="/red2J"
                    routeb="/red3Kcompar"
                />
    </RedCont>
}
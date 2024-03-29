import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {deserted} from '../styles/redintro.module.css'
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
    

    .dream{
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
    const HandleHamClick = () =>{
        setopacitystate(!opacitystate)
        setrightstate(!rightstate)
        
    }

    console.log("heightstate", heightstate)
    console.log("opacitystate", opacitystate)
    console.log("rightstate", rightstate)
    return <RedCont>
            <div className="header">
                <HeaderUI
                arrowrotation="rotate(225deg)"
                text1="Shelly reaches a reef away from "
                text2="the fisherman, only to find it  "
                text3="barren and deserted."
                text4="The Facts"
                text5="	Bycatching of these turtles is such big problem that many wildlife organization recognizes it as a main reason for their endangered status. The tropical climates these beautiful animals reside in is some of the most overfished areas with loose laws around the topic."
                number="7-c"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={deserted}>
                <Image
                    alt="open water"
                    src="/backgrounds/deserted.png"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="dream img" 
                    src="/drawings/_grn-dream.png"
                    alt="turtle"
                    layout="responsive"
                    quality={10}
                    width={192}
                    height={195}
                />
                <FooterUI 
                    routea="/yellow3I"
                    routeb="/red3Kcompar"
                />
    </RedCont>
}
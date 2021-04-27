import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {young} from '../styles/redintro.module.css'
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
    


    .young{
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
                text1="Now that Shelly is a  "
                text2="young turtle, it’s time to "
                text3="settle close to the shore."
                text4="The Facts"
                text5="where they stay for about 30 years until they reach adulthood, the hawksbill turtle prefers near shore line nestings due to the abundance of sponges they also like to feed on."
                number="4"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
         
               
                >
                </HeaderUI>
            </div>
            <div className={young}>
                <Image
                    alt="shoreline water"
                    src="/backgrounds/young.png"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="young img" 
                    src="/drawings/_grn-young.png"
                    alt="egg"
                    layout="responsive"
                    quality={10}
                    width={165}
                    height={176}
                />
                <FooterUI 
                    routea="/quiz1aa"
                    routeb="/yellowdirection"
                />
    </RedCont>
}
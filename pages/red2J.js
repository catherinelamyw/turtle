import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {settle} from '../styles/redintro.module.css'
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
        transform: matrix(-1, 0, 0, 1, 0, 0);
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
                text1="After escaping from  "
                text2="all those dangers, Shelly "
                text3="is ready to settle down."
                text4="The Facts"
                text5="Hawksbill turtles can migrate 1000km + in just one migration which happens very two to 5 years"
                number="7-b"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={settle}>
                <Image
                    alt="open water"
                    src="/backgrounds/settle.png"
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
                    routea="/yellow2I"
                    routeb="/red2Kexpect"
                />
    </RedCont>
}
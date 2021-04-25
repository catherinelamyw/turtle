import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {comparision} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    

    .footer {
        display: flex;
        flex-direction: column;
        z-index: 1;
        margin-top: 410px;
        
        
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
                text1="What was once a common "
                text2="meeting ground for other turtles"
                text3="and fish alike is now empty."
                text4="The Facts"
                text5="	A world without corals means not only will we have a less diverse and less beautiful ocean, but it will also be an economic disaster for many people namely in developing countries."
                number="8-b"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={comparision}>
                <Image
                    alt="sad and empty"
                    src="/backgrounds/comparision.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
            <div className="footer">
                <FooterUI 
                    routea="/red2Kexpect"
                    routeb="/red2Lreality"
                />
            </div>
    </RedCont>
}
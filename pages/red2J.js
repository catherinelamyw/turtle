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
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    


    .dream{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 95px;
        margin-bottom: 215px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        z-index: -1;
    }
    .footer {
        display: flex;
        flex-direction: column;
        
        
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
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="dream img" 
                    src="/drawings/_grn-dream.png"
                    alt="turtle"
                    layout="responsive"
                    width={192}
                    height={195}
                />
            <div className="footer">
                <FooterUI 
                    routea="/yellow2I"
                    routeb="/red2Kexpect"
                />
            </div>
    </RedCont>
}
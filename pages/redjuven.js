import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {juvenile} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'




const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    

    .juven {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 55px;
        margin-bottom: 260px;
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
                text1="Shelly eats small algae while "
                text2="drifting in the ocean, following"
                text3="the current for a few years."
                text4="The Facts"
                text5="Juvenile sea turtles can drift in the currents for up to 10 years. Feeding off small fishes, crustaceans , and jellyfishes"
                number="3"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                
                
                
                >
                </HeaderUI>
            </div>
            <div className={juvenile}>
                <Image
                    alt="open water"
                    src="/backgrounds/juvenile.jpg"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="juven img" 
                    src="/drawings/_grn-juv.png"
                    alt="turtle"
                    layout="responsive"
                    width={265}
                    height={149}
                />
            <div className="footer">
                <FooterUI
                    routea="/redhatch"
                    routeb="/quiz1"
                 />
            </div>
    </RedCont>
}
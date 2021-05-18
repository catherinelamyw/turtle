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
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    

    .juven {
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
                    layout="fill"
                    objectFit="cover"
                    priority="true"
                    quality={10}
                />
            </div>
                <img className="juven img" 
                    src="/drawings/_grn-juv.png"
                    alt="turtle"
                    layout="responsive"
                    quality={10}
                    width={265}
                    height={149}
                />
                <FooterUI
                    routea="/redhatch"
                    routeb="/quiz1"
                 />
    </RedCont>
}
import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
// import {mainWords} from '../data'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {beach} from '../styles/redintro.module.css'
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
    
   


    .egg {
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        margin-top: 245px;
       
    }

    
`

export default function redintro(){

    const [heightstate, setheightstate] = useState(false)
    const [opacitystate, setopacitystate] = useState(false)

    

  
    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }

    return <RedCont>
            <div className="header">
                <HeaderUI
                text1="On a sandy beach,"
                text2="153 sea turtles eggs"
                text3="lay in a nest"
                text4="The Facts"
                text5="The whole nesting process for our turtles begins when they leave the sea to choose an area to lay their eggs. They dig a pit in the sand, fill it with 130 to 160 eggs, and then cover it. Then the hawksbill turtle will retreat back to see leaving the eggs, which will hatch in about 60 days."
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
                
                >
                </HeaderUI>
            </div>
            <div className={beach}>
                <Image
                    alt="Beach"
                    src="/backgrounds/beach.png"
                    layout="fill"
                    objectFit="cover"
                    priority="true"
                    quality={50}
                />
            </div>
            <div className="egg img">
                <img
                    src="/drawings/egg.png"
                    alt="egg"
                    layout="responsive"
                    quality={10}
                    width={250}
                    height={270}
                />
            </div>
                <FooterUI 
                    routea='/howtoplay'
                    routeb="/redhatch"
                />
    </RedCont>
}
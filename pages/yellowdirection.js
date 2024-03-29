import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {direction} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    
    

    .shape{
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
                text1="Let’s help Shelly find a"
                text2="home in the coral reefs!"
                text3=""
                text4="The Facts"
                text5="	Hawksbill turtles avoid deeper waters as nesting areas due to predators roaming all around those waters"
                number="5"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={direction}>
                <Image
                    alt="shoreline"
                    src="/backgrounds/direction.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="shape img" 
                    src="/drawings/_grn-shape.png"
                    alt="turtle"
                    layout="responsive"
                    quality={10}
                    width={95}
                    height={87}
                />
                <MarginUI 
                    text="Where should Shelly go?"
                    buttona="Northeast"
                    buttonb="East"
                    buttonc="Southeast"
                    routea="/yellowI"
                    routeb="/yellow2I"
                    routec="/yellow3I"
                />
    </RedCont>
}
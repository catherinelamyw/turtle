import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {interval} from '../styles/redintro.module.css'
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
    
    


    .barrel{
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        transform: rotate(13.01deg);
        
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
                text1="Illegal dumpers caused an oil "
                text2="spill, and Shelly must resurface"
                text3="soon in order to breathe."
                text4="The Facts"
                text5="	This is a reality for so many hawksbill turtles as coastal developments and runoff oil spills from deep water Riggs destroy their habitats and food supply leaving to starve and suffocate."
                number="6-a"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={interval}>
                <Image
                    alt="Water"
                    src="/backgrounds/interval.png"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="barrel img" 
                    src="/drawings/barrel.png"
                    alt="oil"
                    layout="responsive"
                    quality={10}
                    width={200}
                    height={104}
                />
                <MarginUI 
                    text="What should we do?"
                    buttona="Take a nearby current"
                    buttonb="Quickly swim past it"
                    buttonc="Turn and swim away"
                    routea="/redJ"
                    routeb="/red4J"
                    routec="/yellow2I"
                />
    </RedCont>
}
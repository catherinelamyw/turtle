import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {interval} from '../styles/redintro.module.css'
import MarginUI from '../comps/SmallMargin'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    
    
    
    .net{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
        z-index: -1;
        
        
        
    }
    .footer {
        display: flex;
        flex-direction: column;
        z-index: -1;
        
        
    }
    
`

export default function redintro(){

    const [heightstate, setheightstate] = useState(false)
    const [opacitystate, setopacitystate] = useState(false)
    const [rightstate, setrightstate] = useState(false)
    

    // Hamburger back states
    
    
    //
    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }
    const HandleHamClick = () =>{
        setopacitystate(!opacitystate)
        setrightstate(!rightstate)
        
    }
    // const HandleHambackClick = () =>{
    //     setleftstate(leftstate)
        
    // }

    console.log("heightstate", heightstate)
    console.log("opacitystate", opacitystate)
    console.log("rightstate", rightstate)

    return <RedCont>
            <div className="header">
                <HeaderUI
                arrowrotation="rotate(225deg)"
                text1="A fisherman casted a net into the"
                text2="ocean for some nearby tuna."
                text3=""
                text4="The Facts"
                text5="	The Hawksbill doesn’t have too many natural predators due to its thick large shell. But a huge danger to them is humans and overfishing in tropical climates. Its common for the turtle to be caught in stray fishing nets and taken aboard ships and not thrown back in the water due to their shells being a commodity. The legal trade of these shells ended back in 1993 but black market deals still happen today."
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
                onHamClick={HandleHamClick}
               
                >
                </HeaderUI>
            </div>
                <HamburgerMenuUI 
                    arrowrotation="rotate(-45deg)"
                    arrowrotationC="rotate(225deg)"
                    width="280px"
                    height="610px"
                    z-index="0"
                    opacity={opacitystate ? 1 : 0}
                    right={rightstate ? 95 : 375}
                    
                    
                        
                />
            <div className={interval}>
                <Image
                    alt="Water"
                    src="/backgrounds/interval.png"
                    layout="responsive"
                    quality={50}
                    width={378}
                    height={750}
                />
            </div>
                <img className="net img" 
                    src="/drawings/net.png"
                    alt="oil"
                    layout="responsive"
                    width={375}
                    height={290}
                />
            <div className="footer">
                <MarginUI 
                    text="What should we do?"
                    buttona="Swim away from here"
                    buttonb="Try to swim around it"
                />
            </div>
    </RedCont>
}
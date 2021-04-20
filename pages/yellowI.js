import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {interval} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    


    .barrel{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 130px;
        margin-bottom: 85px;
        z-index: -1;
        transform: rotate(13.01deg);
        
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
                text1="Illegal dumpers caused an oil "
                text2="spill, and Shelly must resurface"
                text3="soon in order to breathe."
                text4="The Facts"
                text5="	This is a reality for so many hawksbill turtles as coastal developments and runoff oil spills from deep water Riggs destroy their habitats and food supply leaving to starve and suffocate."
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
                    width={375}
                    height={750}
                />
            </div>
                <img className="barrel img" 
                    src="/drawings/barrel.png"
                    alt="oil"
                    layout="responsive"
                    width={200}
                    height={104}
                />
            <div className="footer">
                <MarginUI 
                    text="What should we do?"
                    buttona="Take a nearby current"
                    buttonb="Quickly swim past it"
                    buttonc="Turn and swim away"
                    routea="/redJ"
                    routeb="/red4J"
                    routec="/yellow2I"
                />
            </div>
    </RedCont>
}
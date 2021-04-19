import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {direction} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    


    .shape{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-bottom: 110px;
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
                text1="Let’s help Shelly find a"
                text2="home in the coral reefs!"
                text3=""
                text4="The Facts"
                text5="	Hawksbill turtles avoid deeper waters as nesting areas due to predators roaming all around those waters"
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
            <div className={direction}>
                <Image
                    alt="shoreline"
                    src="/backgrounds/direction.jpg"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="shape img" 
                    src="/drawings/_grn-shape.png"
                    alt="turtle"
                    layout="responsive"
                    width={95}
                    height={87}
                />
            <div className="footer">
                <MarginUI 
                    text="Where should Shelly go?"
                    buttona="Northeast"
                    buttonb="East"
                    buttonc="Southeast"
                />
            </div>
    </RedCont>
}
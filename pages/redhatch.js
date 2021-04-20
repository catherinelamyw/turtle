import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {beach} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'




const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    


    .shell {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 80px;
        margin-bottom: 0px;
        z-index: -1;
    }

    .baby {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        margin-left: 140px;
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
                text1="The swarming seagulls are "
                text2=" ready to prey. One lucky turtle "
                text3="reaches the ocean unharmed."
                text4="The Facts"
                text5="This can be one of the most dangerous times of their lives.  Hatchlings (baby turtles) make the journey from their nests to the sea. Crabs and flocks of gulls voraciously prey on the young turtles during this short scamper back to the sea and unfortunately not all of them always make it."
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
            <div className={beach}>
                <Image
                    alt="Beach"
                    src="/backgrounds/beach.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="baby img"
                    src="/drawings/_grn-baby.png"
                    alt="egg"
                    layout="responsive"
                    width={100}
                    height={120}
                />
                <img className="shell img" 
                    src="/drawings/shell.png"
                    alt="egg"
                    layout="responsive"
                    width={218}
                    height={212}
                />
            <div className="footer">
                <FooterUI
                    routea="/redintro"
                    routeb="/redjuven"
                />
            </div>
    </RedCont>
}
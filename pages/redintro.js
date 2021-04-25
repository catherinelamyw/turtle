import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
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
    


    .egg {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
        margin-top: 75px;
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
                text1="On a sandy beach,"
                text2="153 sea turtles eggs"
                text3="lay in a nest"
                text4="The Facts"
                text5="The whole nesting process for our turtles begins when they leave the sea to choose an area to lay their eggs. They dig a pit in the sand, fill it with 130 to 160 eggs, and then cover it. Then the hawksbill turtle will retreat back to see leaving the eggs, which will hatch in about 60 days."
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
                // onHamClick={HandleHamClick}
                
                >
                </HeaderUI>
            </div>
                {/* <HamburgerMenuUI 
                    arrowrotation="rotate(-45deg)"
                    arrowrotationC="rotate(225deg)"
                    width="280px"
                    height="610px"
                    z-index="0"
                    opacity={opacitystate ? 1 : 0}
                    right={rightstate ? 95 : 375}
                    
                    
                        
                /> */}
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
                <img className="egg img" 
                    src="/drawings/egg.png"
                    alt="egg"
                    layout="responsive"
                    width={305}
                    height={385}
                />
            <div className="footer">
                <FooterUI 
                    routea='/howtoplay'
                    routeb="/redhatch"
                />
            </div>
    </RedCont>
}
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
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    


    .shell {
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
    }

    .baby {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
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
                text1="The swarming seagulls are "
                text2=" ready to prey. One lucky turtle "
                text3="reaches the ocean unharmed."
                text4="The Facts"
                text5="This can be one of the most dangerous times of their lives.  Hatchlings (baby turtles) make the journey from their nests to the sea. Crabs and flocks of gulls voraciously prey on the young turtles during this short scamper back to the sea and unfortunately not all of them always make it."
                number="2"
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
                    quality={10}
                />
            </div>
                <img className="baby"
                    src="/drawings/_grn-baby.png"
                    alt="egg"
                    layout="responsive"
                    quality={10}
                    width={100}
                    height={120}
                />
                <img className="shell" 
                    src="/drawings/shell.png"
                    alt="egg"
                    layout="responsive"
                    quality={10}
                    width={250}
                    height={270}
                />
                <FooterUI
                    routea="/redintro"
                    routeb="/redjuven"
                />
    </RedCont>
}
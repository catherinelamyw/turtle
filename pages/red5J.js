import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {poisioning} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    overflow: hidden;
    


    .die{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 45px;
        margin-bottom: 85px;
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
                arrowrotation="rotate(225deg)"
                text1="Shelly mistakenly ate plastic  "
                text2="because it appeared and floated "
                text3="like jellyfish."
                text4="The Facts"
                text5="	The annual rate of sea turtle deaths on an average is about 1000 a year but this is a large underestimate "
                number="End"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={poisioning}>
                <Image
                    alt="dirty land"
                    src="/backgrounds/poisioning.jpg"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="die img" 
                    src="/drawings/_grn-die.png"
                    alt="turtle"
                    layout="responsive"
                    width={438}
                    height={322}
                />
            <div className="footer">
                <FooterUI 
                    routea="/yellow2I"
                    routeb="/conclusion"
                />
            </div>
    </RedCont>
}
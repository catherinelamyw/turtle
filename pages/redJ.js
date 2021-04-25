import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {arrive} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    


    .start{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 95px;
        margin-bottom: 250px;
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
                text1="Shelly found the coral reefs! "
                text2=""
                text3=""
                text4="The Facts"
                text5="Some turtles are lucky and face adversity and make it to the reefs. however This is becoming more and more increasingly rare as the years go on. We need to do our part to keep these creatures around for our children too"
                number="End"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={arrive}>
                <Image
                    alt="Coral reef"
                    src="/backgrounds/arrive.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="start img" 
                    src="/drawings/_grn-start.png"
                    alt="turtle"
                    layout="responsive"
                    width={192}
                    height={165}
                />
            <div className="footer">
                <FooterUI 
                    routea="/yellowI"
                    routeb="/conclusion"
                />
            </div>
    </RedCont>
}
import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import HamburgerMenuUI from '../comps/Header/HamburgerMenuUI'
import Image from 'next/image'
import {young} from '../styles/redintro.module.css'
import FooterUI from '../comps/Footer/'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    


    .young{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 95px;
        margin-bottom: 233px;
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
                text1="Now that Shelly is a  "
                text2="young turtle, it’s time to "
                text3="settle close to the shore."
                text4="The Facts"
                text5="where they stay for about 30 years until they reach adulthood, the hawksbill turtle prefers near shore line nestings due to the abundance of sponges they also like to feed on."
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
            <div className={young}>
                <Image
                    alt="shoreline water"
                    src="/backgrounds/young.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="young img" 
                    src="/drawings/_grn-young.png"
                    alt="egg"
                    layout="responsive"
                    width={165}
                    height={176}
                />
            <div className="footer">
                <FooterUI />
            </div>
    </RedCont>
}
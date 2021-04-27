import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {deserted} from '../styles/redintro.module.css'
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
    
    


    .cry{
        display:flex;
        justify-content: center;
        align-items: center;
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
                arrowrotation="rotate(225deg)"
                text1="Some of our everyday actions"
                text2="can harm marine life. "
                text3=""
                text4="The Facts"
                text5="	Slowly we can make a difference its just a step-by-step process"
                number="test"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={deserted}>
                <Image
                    alt="Water"
                    src="/backgrounds/deserted.png"
                    layout="fill"
                    objectFit="cover"
                    quality={10}
                />
            </div>
                <img className="cry img" 
                    src="/drawings/_grn-cry.png"
                    alt="oil"
                    layout="responsive"
                    quality={10}
                    width={170}
                    height={150}
                />
                <MarginUI 
                    text="Which of these cleaning 
                    activites are safe?"
                    buttona="Wash your clothes with phosphate-free detergents"
                    buttonb="De-ice your driveway with salt"
                    buttonc="Dispose chemicals in the sink"
                    routea="/messaged"
                    routeb="/messagee"
                    routec="/messagef"
                />
    </RedCont>
}
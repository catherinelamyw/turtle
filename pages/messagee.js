import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {deserted} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'
import WrongtUI from '../comps/Wrong'


const RedCont = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 100vh;
min-width: 100vw;
z-index: 1;
position: relative;

    
    .wrong {
      margin-top: 35px;
      justify-content: space-between;
      align-items: center:
      flex-direction: coloumn;
      z-index: 3;
      position: absolute;
    }

    .cry{
        display:flex;
        justify-content: center;
        align-items: center;
        
        
    }
    .Bot {
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
            <div className="wrong">
              <WrongtUI height="675" width="338" routea="" routeb="/yellow3L" text2="De-ice your driveway with salt" text4="This type of salt is toxic, and it will harm marine life if the sewer drains reach the ocean."></WrongtUI>
            </div>
            <div className={deserted}>
                <Image
                    alt="Water"
                    src="/backgrounds/deserted.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="cry img" 
                    src="/drawings/_grn-cry.png"
                    alt="oil"
                    layout="responsive"
                    width={170}
                    height={150}
                />
            <div className="footer">
                <MarginUI 
                    text="Which of these cleaning 
                    activites are safe?"
                    buttona="Wash your clothes with phosphate-free detergents"
                    buttonb="De-ice your driveway with salt"
                    buttonc="Dispose chemicals in the sink"
                    routea=""
                    routeb=""
                    routec=""
                />
            </div>
    </RedCont>
}
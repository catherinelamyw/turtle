import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {reality} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'
import WrongUI from '../comps/Wrong'


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
      position: fixed;
    }

    .cry{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-left: 130px;
        z-index: -1;
        
        
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
    const HandleHamClick = () =>{
        setopacitystate(!opacitystate)
        setrightstate(!rightstate)
        
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
                onHamClick={HandleHamClick}
               
                >
                </HeaderUI>
            </div>
            <div className="wrong">
              <WrongUI height="675" width="338" routea="" text4="Grease should be wiped clean with paper towel and tossed in garbage. Do not pour fat, oil, or grease down the drain." text2="Wash greasy plates in the sink"></WrongUI>
            </div>
            <div className={reality}>
                <Image
                    alt="Harsh"
                    src="/backgrounds/reality.png"
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
                    text="A positive change can even start from your kitchen, what could you do?"
                    buttona="Install a food garbage disposal in your sink"
                    buttonb="Choose environmentally- friendly cleaning products"
                    buttonc="Wash greasy plates in the sink"
                    routea=""
                    routeb=""
                    routec=""
                />
            </div>
    </RedCont>
}
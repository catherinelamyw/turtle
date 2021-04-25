import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../comps/Header/TopHeader'
import Image from 'next/image'
import {interval} from '../styles/redintro.module.css'
import MarginUI from '../comps/Margin'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    position: relative;
    
    
    img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 230px;
        z-index: -1;
    }


    .jellyy {
        margin-left: 20px;
        margin-bottom: 10px;
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
                text1="Shelly notices some delicious-"
                text2="looking food floating around."
                text3=""
                text4="The Facts"
                text5="	Hawksbills are omnivorous and eat a variety of sea life and one them would the jelly fish. Due to pollution the hawksbill can occasionally eat and choke on stray plastic suck on the sea life they eat and this is another reason to properly recycle our plastic correctly."
                number="6-b"
                opacity={opacitystate ? 0.8 : 1}
                height={heightstate ? 500 : 155}
                onClick={Handleclick} 
               
                >
                </HeaderUI>
            </div>
            <div className={interval}>
                <Image
                    alt="water"
                    src="/backgrounds/interval.png"
                    layout="responsive"
                    quality={50}
                    width={375}
                    height={750}
                />
            </div>
                <img className="jelly img" 
                    src="/drawings/jelly.png"
                    alt="jelly"
                    layout="responsive"
                    width={110}
                    height={123}
                />
                <img className="jellyy img" 
                    src="/drawings/jelly.png"
                    alt="jelly"
                    layout="responsive"
                    width={50}
                    height={56}
                />
            <div className="footer">
                <MarginUI 
                    text="What should we do?"
                    buttona="Eat some pink jellyfish"
                    buttonb="Eat some blue jellyfish"
                    buttonc="Continue to swim"
                    routea="/red2J"
                    routeb="/red5J"
                    routec="/yellow3I"
                />
            </div>
    </RedCont>
}
import styled from 'styled-components'
import React from 'react'
import {useState} from 'react'
import HeaderUI from '../../comps/Header/TopHeader'
import Image from 'next/image'
import {beach} from '../../styles/redintro.module.css'
import FooterUI from '../../comps/Footer'
import {useRouter} from 'next/router'
import {main} from '../../data/text.js'


const RedCont = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    position: relative;
    
   


    .egg {
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        margin-top: 245px;
       
    }

    
`


export default function redhatch2(){
    const router = useRouter()
    const {redhatch} = router.query

    var text1 = "null"
    var text2 = "null"
    var text3 = "null"
    var text4 = "null"
    var text5 = "null"

    if(redhatch == "redhatchcon"){
        text1 = main.redhatch.text1
        text2 = main.redhatch.text2
        text3 = main.redhatch.text3
        text4 = main.redhatch.text4
        text5 = main.redhatch.text5
    }


    const [heightstate, setheightstate] = useState(false)
    const [opacitystate, setopacitystate] = useState(false)
  

  
    const Handleclick = () =>{
        setheightstate(!heightstate)
        setopacitystate(!opacitystate)
       
    }

    return <RedCont>
            <div className="header">
                <HeaderUI
                text1={text1}
                text2={text2}
                text3={text3}
                text4={text4}
                text5={text5}
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
                    priority="true"
                    quality={50}
                />
            </div>
            <div className="egg img">
                <img
                    src="/drawings/egg.png"
                    alt="egg"
                    layout="responsive"
                    quality={10}
                    width={250}e 
                    height={270}
                />
            </div>
                <FooterUI 
                    routea='/howtoplay'
                    routeb={()=>router.push("/redhatch2/redhatchcon")}
                />
    </RedCont>
}

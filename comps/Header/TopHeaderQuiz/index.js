import React from 'react'
import styled from 'styled-components'
import HamburgerIcon from '../HamburgerIcon'



const QuizHeaderCont = styled.div`
    font-family:sans-serif;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #242C3C;
    height: ${props=>props.height}px;
    width: ${props=>props.width};
    opacity: ${props=>props.opacity};
    transition: 1s;
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }
    z-index: 1;
    position: absolute;
    overflow: hidden;


`
//
const QuizMenuCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    
`

const QuizHeaderText = styled.h4`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 250px;
    

`
const QuizHeaderTextCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
   
`

const QuizHeaderTextFacts = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20%;
    
`

const QuizHeaderUI = ({
    menucolor="#fff",
    arrowrotation="rotate(0deg)",
    text1="text",
    text2="text",
    text3="text",
    text4="text",
    text5="text",
    height="155px",
    width="375px",
    opacity="1",
    onClick = () =>{},
    onHamClick =() =>{}
    
}) =>{
    return <QuizHeaderCont height={height} width={width} opacity={opacity} >
        <QuizMenuCont>
            <HamburgerIcon menucolor={menucolor} onHamClick={onHamClick} />
        </QuizMenuCont>
        <QuizHeaderTextCont>
            <QuizHeaderText >
                {text1}
                <br/>
                {text2}
                <br/>
                {text3}
                <br/>
            </QuizHeaderText>
            <QuizHeaderTextFacts>
                {text4}
            </QuizHeaderTextFacts>
            <QuizHeaderText>
                {text5}
            </QuizHeaderText>
        </QuizHeaderTextCont>
        
    </QuizHeaderCont>
}

export default QuizHeaderUI
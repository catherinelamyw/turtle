import React from 'react'
import styled from 'styled-components'


const HeaderCont = styled.div`
    font-family:sans-serif;
    display: flex;
    flex-direction: row;
    background-color: #425B8C;
    opacity: 0.8;
    height: ${props=>props.height};
    width: ${props=>props.width};
    overflow: hidden;
    padding: 0px 0px 0px 10px;
    border-radius: 0px 0px 20px 20px;
    & > * {
        color: #fff;
    }


`
const HamburgerMenuTextCont = styled.div`
    display: flex;
    flex-direction: column;

`

const HamburgerText = styled.h4`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px 0px 0px 10px;
`


const HamburgerTextHead = styled.h2`
    display: flex;
    align-items: center;
    margin: 0px;

`
//
const ChapterCont = styled.div`
    display: flex;
    flex-direction: column;

`
const ChapterTextHead = styled.h2`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 15px 0px 0px 10px;

`
const ChapterText = styled.h4`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px 0px 0px 20px;
`
//
const ArrowCont = styled.div`
    display: flex;
    width: 260px;
    justify-content: flex-end;
   
    
`


const HeaderArrow = styled.div`
    height: 20px;
    width: 20px;
    margin: 20px 0px 0px 3px;
    border-left: 5px solid ; 
    border-top: 5px solid ;
    transform: ${props=>props.arrowrotation};

`
const ChapterArrow = styled.div`
    height: 15px;
    width: 15px;
    margin: 0px 0px 0px 15px;
    border-left: 5px solid ; 
    border-top: 5px solid ;
    transform: ${props=>props.arrowrotationC};
    
    
`
//

const HamburgerMenuUI = ({
    arrowrotation="rotate(0deg)",
    arrowrotationC="rotate(0deg)",
    height="155px",
    width="365px",
    text="text",
    //
    menutext1="Landing page",
    menutext2="Customization page",
    menutext3="How to play",
    menutext4="How to help",
    //
    chapterheader="Chapters",
    chaptertext1="Intro- Egg",
    chaptertext2="Intro- Hatchling",
    chaptertext3="Intro- Juvenile",
    //
    chapterheader1="Pop Quiz 1",
    chaptertext4="Interval- Young",
    chaptertext5="Interval- Direction",
    chaptertext6="Interval- Oil spill",
    //
    chapterheader2="Pop Quiz 2",
    //
    chapterheader3="Consequence- Settle",
    chaptertext7="Consequence- Expectation",
    chaptertext8="Consequence- Reality",
    chaptertext9="Consequence- Pollution",
    //
    chapterheader4="Pop Quiz 4",
    chapterheader5="Conclusion"
}) =>{
    return <HeaderCont height={height} width={width}>
        <HamburgerMenuTextCont>
            <ArrowCont>
                <HeaderArrow arrowrotation={arrowrotation} />
            </ArrowCont>
            <HamburgerTextHead>{text}</HamburgerTextHead>
            <br/>
            <HamburgerText>
                {menutext1}
                <br/>
                {menutext2}
                <br/>
                {menutext3}
                <br/>
                {menutext4}
            </HamburgerText>
        <ChapterCont>
            <ChapterTextHead>
                {chapterheader} 
                <ChapterArrow arrowrotationC={arrowrotationC} />
            </ChapterTextHead>
            
            <br/>
            <ChapterText>
                {chaptertext1}
                <br/>
                {chaptertext2}
                <br/>
                {chaptertext3}
            </ChapterText>
            <br/>
            <ChapterTextHead>{chapterheader1}</ChapterTextHead>
            <br/>
            <ChapterText>
                {chaptertext4}
                <br/>
                {chaptertext5}
                <br/>
                {chaptertext6}
            </ChapterText>
            <br/>
            <ChapterTextHead>{chapterheader2}</ChapterTextHead>
            <br/>
            <ChapterTextHead>{chapterheader3}</ChapterTextHead>
            <br/>
            <ChapterText>
                {chaptertext7}
                <br/>
                {chaptertext8}
                <br/>
                {chaptertext9}
            </ChapterText>
            <br/>
            <ChapterTextHead>{chapterheader4}</ChapterTextHead>
            <br/>
            <ChapterTextHead>{chapterheader5}</ChapterTextHead>

        </ChapterCont>
            
        </HamburgerMenuTextCont>
    </HeaderCont>
}

export default HamburgerMenuUI

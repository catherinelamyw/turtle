import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import HeadingUI from '../comps/Heading'
import NumberIcon from '../comps/Header/PageNumberIcon'
import FactsMenu from '../comps/FactsMenu'
import WhiteTextUI from '../comps/WhiteText'
import React, {useState} from 'react'
import {facts} from '../data/text.js'

export default function Facts() {
  const [page, setPage] = useState("num")
  const [fact, setFact] = useState("Fact in white text")

  const HandleOne = () => {
    setPage(facts.one.page);
    setFact(facts.one.fact)
  }

  const HandleTwo = () => {
    setPage(facts.two.page);
    setFact(facts.two.fact);
  }

  const HandleThree = () => {
    setPage(facts.three.page);
    setFact(facts.three.fact);
  }

  const HandleFour = () => {
    setPage(facts.four.page);
    setFact(facts.four.fact);
  }
  
  const HandleFive = () => {
    setPage(facts.five.page);
    setFact(facts.five.fact);
  }

  const HandleSix = () => {
    setPage(facts.six.page);
    setFact(facts.six.fact);
  }

  const HandleSeven = () => {
    setPage(facts.seven.page);
    setFact(facts.seven.fact);
  }

  const HandleEight = () => {
    setPage(facts.eight.page);
    setFact(facts.eight.fact);
  }

  const HandleNine = () => {
    setPage(facts.nine.page);
    setFact(facts.nine.fact);
  }

  const HandleTen = () => {
    setPage(facts.ten.page);
    setFact(facts.ten.fact);
  }

  const HandleEleven = () => {
    setPage(facts.eleven.page);
    setFact(facts.eleven.fact);
  }

  const HandleTwelve = () => {
    setPage(facts.twelve.page);
    setFact(facts.twelve.fact);
  }

  const HandleThirteen = () => {
    setPage(facts.thirteen.page);
    setFact(facts.thirteen.fact);
  }

  const HandleFourteen = () => {
    setPage(facts.fourteen.page);
    setFact(facts.fourteen.fact);
  }

  const HandleFifteen = () => {
    setPage(facts.fifteen.page);
    setFact(facts.fifteen.fact);
  }

  const HandleSixteen = () => {
    setPage(facts.sixteen.page);
    setFact(facts.sixteen.fact);
  }

  return (
    <div className={styles.container}>
      <HeadingUI text='Facts'></HeadingUI>

      <FactsMenu 
        onOneClick={HandleOne}
        onTwoClick={HandleTwo}
        onThreeClick={HandleThree}
        onFourClick={HandleFour}
        onFiveClick={HandleFive}
        onSixClick={HandleSix}
        onSevenClick={HandleSeven}
        onEightClick={HandleEight}
        onNineClick={HandleNine}
        onTenClick={HandleTen}
        onElevenClick={HandleEleven}
        onTwelveClick={HandleTwelve}
        onThirteenClick={HandleThirteen}
        onFourteenClick={HandleFourteen}
        onFifteenClick={HandleFifteen}
        onSixteenClick={HandleSixteen}
      />

      {page === "num" ?
        <WhiteTextUI text="Click on a page number to view a fact"/> 
        :
        <NumberIcon number={page} text={fact} />
      }

      <ButtonUI text='Back to Homepage' bgcolor='#FFE9A7' width='244'></ButtonUI>
    </div>
  )
}
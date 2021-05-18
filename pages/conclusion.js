import styles from '../styles/conclusion.module.css'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import WhiteTextUI from '../comps/WhiteText'
import {HiMenu} from 'react-icons/hi'
import HouseIcon from '../comps/Header/HouseIcon'
import styled from 'styled-components'
import Image from 'next/image'

export default function Conclusion() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HouseIcon />
        <div className={styles.rightmargin}>
          <HiMenu color='#fff' size='50px'/>
        </div>
      </div>
      <div>
        <div className={styles.turtleimg}>
          <Image 
            src="/drawings/_grn-dream.png"
            layout="intrinsic"
            quality={10}
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <WhiteTextUI text="This story ends here, but the Hawksbill Sea Turtle population is still declining."/>
        <WhiteTextUI text="These animals are fighting to survive challenges caused by human activity; like overfishing, polution, and general neglect for ocean life."/>
        <WhiteTextUI text="We hope this story increased your awareness of how our actions are harming marine life."/>
      </div>
      <ConfirmFooterUI buttona="Next" buttoncolor="#FFE9A7" routeTo="/howtohelp"/>
    </div>
  )
}
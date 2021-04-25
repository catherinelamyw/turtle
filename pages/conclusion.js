import styles from '../styles/conclusion.module.css'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import WhiteTextUI from '../comps/WhiteText'
import {HiMenu} from 'react-icons/hi'

export default function Conclusion() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <p>See your checkpoints</p>
        <HiMenu color='#fff' size='50px'/>
      </div>
      <div>
        <WhiteTextUI text="This story ends here, but the Hawksbill Sea Turtle population is still declining."/>
        <WhiteTextUI text="These animals are fighting to survive challenges caused by human activity; like overfishing, polution, and general neglect for ocean life."/>
        <WhiteTextUI text="We hope this story increased your awareness of how our actions are harming marine life."/>
      </div>
      <ConfirmFooterUI buttona="Next" buttoncolor="#FFE9A7" routeTo="/howtohelp"/>
    </div>
  )
}
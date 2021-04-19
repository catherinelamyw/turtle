import styles from '../styles/message.module.css'
import ButtonUI from '../comps/Button'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import WhiteTextUI from '../comps/WhiteText'

export default function Message() {
  return (
    <div className={styles.container}>    
      <div className={styles.center}>
        <WhiteTextUI text="You picked:"/>
        <ButtonUI text="Wash greasy plates in the sink" bgcolor="#FF6464" routeTo="/messagec"/>
        <WhiteTextUI text="Wrong!" fontsize="36"/>
        <WhiteTextUI text="Grease should be wiped clean with paper towel and tossed in garbage. Do not pour fat, oil, or grease down the drain."/>
      </div>
      <ConfirmFooterUI buttona="Try Again" width="120" buttoncolor="#FFE9A7" routeTo="/yellow2M"/>
    </div>
  )
}
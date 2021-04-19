import styles from '../styles/message.module.css'
import ButtonUI from '../comps/Button'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import WhiteTextUI from '../comps/WhiteText'

export default function Message() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <WhiteTextUI text="You picked:"/>
        <ButtonUI text="Dispose chemicals in the sink" bgcolor="#FF6464" routeTo="/messagef"/>
        <WhiteTextUI text="Wrong!" fontsize="36"/>
        <WhiteTextUI text="Chemicals will harm marine life if the sewer drains reach the ocean. Contact your local recycling depot for proper disposal instructions. "/>
      </div>
      <ConfirmFooterUI buttona="Try Again" width="120" buttoncolor="#FFE9A7" routeTo="/yellow3L"/>
    </div>
  )
}
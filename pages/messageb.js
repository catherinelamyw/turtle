import styles from '../styles/message.module.css'
import ButtonUI from '../comps/Button'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import WhiteTextUI from '../comps/WhiteText'

export default function Message() {
  return (
    <div className={styles.container}>      
      <div className={styles.center}>
        <WhiteTextUI text="You picked:"/>
        <ButtonUI text="Choose environmentally- friendly cleaning products" bgcolor="#F0F0F0" routeTo="/messageb"/>
        <WhiteTextUI text="Correct!" fontsize="36"/>
        <WhiteTextUI text="Look out for biodegradable products and avoid phosphates, chlorine, and artificial fragrances."/>
      </div>
      <ConfirmFooterUI buttona="Continue" width="120" buttoncolor="#FFE9A7" routeTo="/conclusion"/>
    </div>
  )
}
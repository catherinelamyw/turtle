import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'
import HamIcon from '../comps/Header/HamburgerIcon'
import InfoButtonUI from '../comps/InfoButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HamIcon />
        <InfoButtonUI></InfoButtonUI>
      </div>
      <div className={styles.center}>
        <img className={styles.logo} src='/hawksbill_logo.png' alt='Hawksbill Logo'/>
        <WhiteTextUI text='An Educational &amp; Interactive Story'></WhiteTextUI>
      </div>
      <div className={styles.center}>
        <ButtonUI text='Start' bgcolor='#FFE9A7' width='244' routeTo='/customize'></ButtonUI>
        <ButtonUI text='Quiz' bgcolor='#F0F0F0' width='244' routeTo="/qlist"></ButtonUI>
        <ButtonUI text='Facts' bgcolor='#F0F0F0' width='244' routeTo='/facts'></ButtonUI>
      </div>
    </div>
  )
}

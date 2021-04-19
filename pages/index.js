import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'
import {HiMenu} from 'react-icons/hi'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HiMenu color='#fff' size='50px'/>
      </div>
      <div className={styles.center}>
        <img className={styles.logo} src='/hawksbill_logo.png' alt='Hawksbill Logo'/>
        <WhiteTextUI text='An Educational &amp; Interactive Story'></WhiteTextUI>
      </div>
      <div className={styles.center}>
        <ButtonUI text='Start' bgcolor='#FFE9A7' width='244' routeTo='/customize'></ButtonUI>
        <ButtonUI text='Quiz' bgcolor='#F0F0F0' width='244'></ButtonUI>
        <ButtonUI text='Facts' bgcolor='#F0F0F0' width='244' routeTo='/facts'></ButtonUI>
      </div>
    </div>
  )
}

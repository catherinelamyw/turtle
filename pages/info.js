import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'
import {HiMenu} from 'react-icons/hi'
import InfoButtonUI from '../comps/InfoButton'
import InfoUI from '../comps/InfoPopUpV2'
import styled from 'styled-components'

const InfoCont = styled.div`
    top: 55px;
    justify-content: space-between;
    align-items: center:
    flex-direction: coloumn;
    position: fixed;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HiMenu color='#fff' size='50px'/>
        <InfoButtonUI></InfoButtonUI>
      </div>
      <div className={styles.center}>
        <InfoCont>
          <InfoUI></InfoUI>
        </InfoCont>
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

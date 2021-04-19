import styles from '../styles/customize.module.css'
import ButtonUI from '../comps/Button'
import ColorUI from '../comps/Color'
import TextboxUI from '../comps/Textbox'
import WhiteTextUI from '../comps/WhiteText'
import {MdArrowBack, MdArrowForward} from 'react-icons/md';
import {HiMenu} from 'react-icons/hi'

export default function Customize() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HiMenu color='#fff' size='50px'/>
      </div>
        <WhiteTextUI text='CUSTOMIZE'/>
      <div className={styles.graphics}>
        <MdArrowBack color='white' size='50px' title='left arrow' className={styles.symbols}/>
        <img className={styles.image} src='/drawings/_grn-start.png' />
        <MdArrowForward color='white' size='50px' title='right arrow' className={styles.symbols}/>
      </div>
      <div className={styles.colors}>
        <ColorUI/>
        <ColorUI color='#8C6239'/>
        <ColorUI color='#272C3B'/>
      </div>
      <WhiteTextUI text='NAME'/>
      <TextboxUI />
      <div>
        <ButtonUI text='Back' width='120' bgcolor='#FFE9A7'/>
        <ButtonUI text='Confirm' width='120' bgcolor='#FFE9A7' routeTo='/howtoplay'/>
      </div>
    </div>
  )
}
import styles from '../styles/howtoplay.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'
import {MdMenu, MdKeyboardArrowDown} from 'react-icons/md';

export default function HowToPlay() {
  return (
    <div className={styles.container}>
      <WhiteTextUI text='HOW TO PLAY'/>
      <div className={styles.pics}>
        <img className={styles.image} src='/tutorial-a.png' />
        <WhiteTextUI text='Read the story at the top' parwidth='240'/>
      </div>
      <div className={styles.pics}>
        <MdMenu color='white' size='50px' title='menu icon' className={styles.menusymbol}/>
        <WhiteTextUI text='See your progress and navigate through the checkpoints' parwidth='290'/>
      </div>
      <div className={styles.pics}>
        <MdKeyboardArrowDown color='white' size='80px' title='dropdown icon' className={styles.downsymbol}/>
        <WhiteTextUI text='Open the dropdown to find some relevant facts' parwidth='290'/>
      </div>
      <div className={styles.pics}>
        <img className={styles.image} src='/tutorial-b.png' />
        <WhiteTextUI text='Choose your options at the bottom' parwidth='240'/>
      </div>
      <div className={styles.pics}>
        <img className={styles.image} src='/tutorial-c.png' />
        <WhiteTextUI text='The outcome changes depending on your choice' parwidth='240'/>
      </div>
      <div>
        <ButtonUI text='Back' width='120' bgcolor='#FFE9A7' routeTo='/customize'/>
        <ButtonUI text='Play' width='120' bgcolor='#FFE9A7'routeTo='/redintro'/>
      </div>
    </div>
  )
}
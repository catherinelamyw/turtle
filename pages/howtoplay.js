import styles from '../styles/howtoplay.module.css'
import ButtonUI from '../comps/Button'
import HeadingUI from '../comps/Heading'
import NumberIcon from '../comps/Header/PageNumberIcon'
import HouseIcon from '../comps/Header/HouseIcon'
import WhiteTextUI from '../comps/WhiteText'
import {MdMenu} from 'react-icons/md';
import {BsFillHouseDoorFill} from 'react-icons/bs'
import HamIcon from '../comps/Header/HamburgerIcon'

export default function HowToPlay() {
  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HamIcon />
      </div>
      <HeadingUI text='How to Play'/>
      <div className={styles.pics}>
        <NumberIcon number='A' text='Read the story at the top' />
        <img className={styles.image} src='/tutorial/stepa.jpg' />
      </div>
      <div className={styles.pics}>
        <NumberIcon number='B' text='Open the dropdown to find and read about the relevant facts'/>
        <img className={styles.image} src='/tutorial/stepb.jpg' />
      </div>
      <div className={styles.pics}>
        <NumberIcon number='C' text='Choose your options at the bottom'/>
        <img className={styles.image} src='/tutorial/stepc.jpg' />
      </div>
      <HeadingUI text='Other Notes'/>
      <div className={styles.pics}>
        <WhiteTextUI text='Go back to the homepage to reset the story' parwidth='290' fontsize='12'/>
        <BsFillHouseDoorFill color='white' size='50px' title='home icon'/>
        <WhiteTextUI text='Home' parwidth='290' fontsize='16'/>
      </div>
      <div className={styles.pics}>
        <WhiteTextUI text='Keep track of your current page as if you are reading a real book' parwidth='290' fontsize='12'/>
        <NumberIcon number='5'/>
      </div>
      <div className={styles.pics}>
        <WhiteTextUI text='Once you reach the end, see your progress and navigate through the checkpoints' parwidth='290' fontsize='12'/>
        <MdMenu color='white' size='50px' title='menu icon' className={styles.menusymbol}/>
      </div>
      <div className={styles.pics}>
        <WhiteTextUI text='Choose your own adventure and the outcome may change depending on your choice' parwidth='260' fontsize='12'/>
        <img className={styles.image} src='/tutorial/choice.jpg' />
      </div>
      <div className={styles.footer}>
        <ButtonUI text='Back' width='120' bgcolor='#FFE9A7' routeTo='/customize'/>
        <ButtonUI text='Play' width='120' bgcolor='#FFE9A7'routeTo='/redintro'/>
      </div>
    </div>
  )
}
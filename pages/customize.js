import styles from '../styles/customize.module.css'
import ButtonUI from '../comps/Button'
import ColorUI from '../comps/Color'
import HeadingUI from '../comps/Heading'
import TextboxUI from '../comps/Textbox'
import WhiteTextUI from '../comps/WhiteText'
import React, {useState} from 'react'
import {MdArrowBack, MdArrowForward} from 'react-icons/md';
import HamIcon from '../comps/Header/HamburgerIcon'

export default function Customize() {
  const [imgcolor, setImgcolor] = useState("/drawings/_grn-start.png")

  const HandleGreen = () => {
    setImgcolor("/drawings/_grn-start.png");
  }
  
  const HandleBrown = () => {
    setImgcolor("/drawings/_brn-start.png");
  }
  
  const HandleBlack = () => {
    setImgcolor("/drawings/_blk-start.png");
  }

  return (
    <div className={styles.container}>
      <div className={styles.topmargin}>
        <HamIcon />
      </div>
      <HeadingUI text='Customize'/>
      <div className={styles.graphics}>
        {/* <MdArrowBack color='white' size='50px' title='left arrow' className={styles.symbols}/> */}
        <img className={styles.image} src={imgcolor} />
        {/* <MdArrowForward color='white' size='50px' title='right arrow' className={styles.symbols}/> */}
      </div>
      <div className={styles.colors}>
        <ColorUI
          onGrnClick={HandleGreen}
          onBrnClick={HandleBrown}
          onBlkClick={HandleBlack}
        />
      </div>
      <div className={styles.row}>
        <WhiteTextUI text='NAME'/>
        <TextboxUI />
      </div>
      <div>
        <ButtonUI text='Back' width='120' bgcolor='#FFE9A7'/>
        <ButtonUI text='Confirm' width='120' bgcolor='#FFE9A7' routeTo='/howtoplay'/>
      </div>
    </div>
  )
}
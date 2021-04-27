import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'

export default function HowToHelp() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <WhiteTextUI text="Learn how you can help with World Wildlife Fund" fontsize="20" parwidth="250"/>
        <ButtonUI text='Link to External Page' bgcolor='#F0F0F0' width='244'></ButtonUI>
      </div>
      <div className={styles.center}>
        <WhiteTextUI text="Read the facts that inspired this story" fontsize="20" parwidth="250"/>
        <ButtonUI text='Facts' bgcolor='#F0F0F0' width='244' routeTo='/facts'></ButtonUI>
      </div>
      <div className={styles.center}>
        <WhiteTextUI text="Challenge yourself with more quizzes" fontsize="20" parwidth="250"/>
        <ButtonUI text='Quiz' bgcolor='#F0F0F0' width='244' routeTo="/quizlist"></ButtonUI>
      </div>
      <div className={styles.center}>
        <WhiteTextUI text="Restart the story and try a different path" fontsize="20" parwidth="250"/>
        <ButtonUI text='Back to Homepage' bgcolor='#FFE9A7' width='244'></ButtonUI>
      </div>
    </div>
  )
}
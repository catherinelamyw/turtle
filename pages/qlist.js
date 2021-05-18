import styles from '../styles/main.module.css'
import ButtonUI from '../comps/Button'
import WhiteTextUI from '../comps/WhiteText'

export default function QuizList() {
  return (
    <div className={styles.container}>
        <div className={styles.center}>
            <WhiteTextUI fontcolor="#F0F0F0" fontsize="42" text="QUIZZES"></WhiteTextUI>
        </div>
        <div className={styles.center}>
            <ButtonUI text="Quiz 1" bgcolor='#F0F0F0' width='244' routeTo="/q1list"></ButtonUI><br/>
        </div>
        <div className={styles.center}>
            <ButtonUI text="Quiz 2" bgcolor='#F0F0F0' width='244' routeTo="/q2list"></ButtonUI><br/>
        </div>
        <div className={styles.center}>
            <ButtonUI text='Back to Homepage' bgcolor='#FFE9A7' width='244'></ButtonUI>
        </div>
    </div>
  )
}
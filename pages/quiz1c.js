import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import ConfirmFooterUI from '../comps/ConfirmFooter';
import styled from 'styled-components';

const Quiz1Cont = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 375px;
    max-height: 812px;
    z-index: 1;
    overflow: hidden;

    .Top {
        width: 90vw;
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-size: 16px;
    }

    .Mid {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 80%;
        padding: 6%;
        padding-top: 80px;
    }

    .Bot {
        display: flex;
        wdith: 90vw;
        margin-top: 24%;
        position: fixed;
    }
`

export default function Quiz1() {
    return <Quiz1Cont>
        <div className="Top">
            <QuizHeaderUI text1="" text2="POP QUIZ" text3="" text4="How many eggs do the Hawksbill Sea Turtles lay?" text5=""></QuizHeaderUI>
        </div>
        <div className="Mid">
            <ButtonUI text="130 to 160" bgcolor="#FFE9A7" onClick={()=>router.push("/quiz1a")}></ButtonUI>
            <ButtonUI text="50 to 100" bgcolor="#FFE9A7" onClick={()=>router.push("/quiz1b")}></ButtonUI>
            <ButtonUI text="10 to 40" bgcolor="#F0F0F0" onClick={()=>router.push("/quiz1c")}></ButtonUI>
        </div>
        <div className="Bot">
            <ConfirmFooterUI onClick={()=>router.push("/quiz1ca")}></ConfirmFooterUI>
        </div>
    </Quiz1Cont>
}
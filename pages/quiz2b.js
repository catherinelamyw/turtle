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
        position: fixed;
        bottom: 0;
    }
`
export default function Quiz1() {
    return <Quiz1Cont>
        <div className="Top">
            <QuizHeaderUI text1="" text2="POP QUIZ" text3="" text4="What part of a Hawksbill Sea Tutles life is the most dangerous?" text5=""></QuizHeaderUI>
        </div>
        <div className="Mid">
            <ButtonUI text="Scavenging for food" bgcolor="#FFE9A7" routeTo="/quiz2a"></ButtonUI>
            <ButtonUI text="Getting lost" bgcolor="#F0F0F0" routeTo="/quiz2b"></ButtonUI>
            <ButtonUI text="As soon as they hatch" bgcolor="#FFE9A7" routeTo="/quiz2c"></ButtonUI>
        </div>
        <div className="Bot">
            <ConfirmFooterUI routeTo="/quiz2ba"></ConfirmFooterUI>
        </div>
    </Quiz1Cont>
}
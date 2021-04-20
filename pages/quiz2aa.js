import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';
import SmallButtonUI from '../comps/SmallButton';


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
        margin-top: 70%;
        padding: 6%;
        padding-top: 80px;
    }

    .Bot {
        display: flex;
        wdith: 90vw;
        margin-top: 28%;
        position: fixed;
    }
`
export default function Quiz1() {
    return <Quiz1Cont>
        <div className="Top">
            <QuizHeaderUI text1="" text2="POP QUIZ" text3="" text4="What part of a Hawksbill Sea Tutles life is the most dangerous?" text5=""></QuizHeaderUI>
        </div>
        <div className="Mid">
            <WhiteTextUI fontsize="24" text="Wrong!"></WhiteTextUI>
            <ButtonUI text="Scavenging for food" bgcolor="#FF6464" routeTo=""></ButtonUI>
            <WhiteTextUI fontsize="20" text="Want to try again?"></WhiteTextUI>
        </div>
        <div className="Bot">
            <FooterUI bgcolor="#FFE9A7" buttona="Try Again" buttonb="Pass"></FooterUI>
        </div>
    </Quiz1Cont>
}
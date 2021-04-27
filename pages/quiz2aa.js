import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';
import SmallButtonUI from '../comps/SmallButton';


const Quiz1Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 375px;
max-height: 812px;
z-index: 1;
position: relative;

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
        margin-botton: 10%;
        height: 460px;
    }

    .Bot {
        display: flex;
        flex-direction: column;
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
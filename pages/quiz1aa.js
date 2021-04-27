import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';
import CheckMarkUI from '../comps/CheckMark';

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

    .Correct {
        align-items: center:
        display: flex;
        flex-direction: coloumn;
        z-index: 3;
        position: absolute;
    }

    .cBox {
        width: 312px;
        height: 496px;
        border-radius: 25px;
        background: #F0F0F0;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 30px;
        margin-top: 165px;
        display: flex;
        flex-direction: column;
    }

    .cText {
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 40px;
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
            <QuizHeaderUI text1="" text2="POP QUIZ" text3="" text4="How many eggs do the Hawksbill Sea Turtles lay?" text5=""></QuizHeaderUI>
        </div>
        <div className="Correct">
            <div className="cBox">
                <div className="cText">
                    <CheckMarkUI></CheckMarkUI>
                    <WhiteTextUI parwidth="250" text="CORRECT!" fontsize="36" fontcolor="#468329"></WhiteTextUI>
                    <WhiteTextUI parwidth="250" text="Sea turtles lay 130 to 160 eggs at a time" fontsize="20" fontcolor="#242C3C"></WhiteTextUI>
                </div>
            </div>
        </div>
        <div className="Mid">
            <ButtonUI text="130 to 160" bgcolor="#F0F0F0" routeTo="/quiz1a"></ButtonUI>
            <ButtonUI text="50 to 100" bgcolor="#FFE9A7" routeTo="/quiz1b"></ButtonUI>
            <ButtonUI text="10 to 40" bgcolor="#FFE9A7" routeTo="/quiz1c"></ButtonUI>
        </div>
        <div className="Bot">
            <FooterUI buttona="Back" buttonb="Continue" routeb="/redyoung" routea="/quiz1"></FooterUI>
        </div>
    </Quiz1Cont>
}
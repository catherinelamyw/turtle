import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';


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

    .Correct {
        text-align: center;
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
    }

    .cText {
        padding: 60px;
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
            <QuizHeaderUI text1="" text2="POP QUIZ" text3="" text4="What part of a Hawksbill Sea Tutles life is the most dangerous?" text5=""></QuizHeaderUI>
        </div>
        <div className="Correct">
            <div className="cBox">
                <div className="cText">
                    <WhiteTextUI parwidth="250" text="Correct!" fontsize="36" fontcolor="#242C3C"></WhiteTextUI><br/><br/>
                    <WhiteTextUI parwidth="250" text="The short distance from where they hatch to the sea is usually the most dangerous" fontsize="20" fontcolor="#242C3C"></WhiteTextUI>
                </div>
            </div>
        </div>
        <div className="Mid">
            <ButtonUI text="Scavenging for food" bgcolor="#F0F0F0" onClick={()=>router.push("/quiz2a")}></ButtonUI>
            <ButtonUI text="Getting lost" bgcolor="#FFE9A7" onClick={()=>router.push("/quiz2b")}></ButtonUI>
            <ButtonUI text="As soon as they hatch" bgcolor="#FFE9A7" onClick={()=>router.push("/quiz2c")}></ButtonUI>
        </div>
        <div className="Bot">
            <FooterUI buttona="Back" buttonb="Continue"></FooterUI>
        </div>
    </Quiz1Cont>
}
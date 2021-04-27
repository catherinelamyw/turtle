import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';
import CheckMarkUI from '../comps/CheckMark';
import Image from 'next/image';

const Quiz1Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 100vh;
min-width: 100vw;
z-index: 1;
position: relative;

    .Top {
        width: 100%;
        display: flex;
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
        margin-top: 150px;
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
    }

    .Bot {
        display: flex;
        flex-direction: column;
    }

    Image {
        z-index: -1;
    }
`
export default function Quiz1() {
    return <Quiz1Cont>
        <div className="Top">
            <QuizHeaderUI number="test" text2="POP QUIZ" text5="How many eggs do the Hawksbill Sea Turtles lay?"></QuizHeaderUI>
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
            <ButtonUI text="130 to 160" bgcolor="#F0F0F0" routeTo="/quiz1a"></ButtonUI><br/>
            <ButtonUI text="50 to 100" bgcolor="#FFE9A7" routeTo="/quiz1b"></ButtonUI><br/>
            <ButtonUI text="10 to 40" bgcolor="#FFE9A7" routeTo="/quiz1c"></ButtonUI>
        </div>
        <div>
        <Image
            alt="open water"
            src="/backgrounds/juvenile.jpg"
            layout="fill"
            objectFit="cover"
            quality={10}
        />
        </div>
        <div className="Bot">
            <FooterUI buttona="Back" buttonb="Continue" routeb="/redyoung" routea="/quiz1"></FooterUI>
        </div>
    </Quiz1Cont>
}
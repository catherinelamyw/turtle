import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import ConfirmFooterUI from '../comps/ConfirmFooter';
import styled from 'styled-components';
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

    .Mid {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .Bot {
        display: flex;
        flex-direction: column;
    }

    .img {
        z-index: -1;
    }
`
export default function Quiz1() {
    return <Quiz1Cont>
        <div className="Top">
            <QuizHeaderUI number="test" text2="POP QUIZ" text5="How many eggs do the Hawksbill Sea Turtles lay?"></QuizHeaderUI>
        </div>
        <div className="Mid">
            <ButtonUI text="130 to 160" bgcolor="#F0F0F0" routeTo="/quiz1a"></ButtonUI><br/>
            <ButtonUI text="50 to 100" bgcolor="#FFE9A7" routeTo="/quiz1b"></ButtonUI><br/>
            <ButtonUI text="10 to 40" bgcolor="#FFE9A7" routeTo="/quiz1c"></ButtonUI>
        </div>
        <div className="img">
        <Image
            alt="open water"
            src="/backgrounds/juvenile.jpg"
            layout="fill"
            objectFit="cover"
            quality={10}
        />
        </div>
        <div className="Bot">
            <ConfirmFooterUI routeTo="/quiz1aa"></ConfirmFooterUI>
        </div>
    </Quiz1Cont>
}
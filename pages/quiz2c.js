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
            <QuizHeaderUI number="test" text2="POP QUIZ" text5="What part of a Hawksbill Sea Tutles life is the most dangerous?"></QuizHeaderUI>
        </div>
        <div className="Mid">
            <ButtonUI text="Scavenging for food" bgcolor="#FFE9A7" routeTo="/quiz2a"></ButtonUI><br/>
            <ButtonUI text="Getting lost" bgcolor="#FFE9A7" routeTo="/quiz2b"></ButtonUI><br/>
            <ButtonUI text="As soon as they hatch" bgcolor="#F0F0F0" routeTo="/quiz2c"></ButtonUI>
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
            <ConfirmFooterUI routeTo="/quiz2ca"></ConfirmFooterUI>
        </div>
    </Quiz1Cont>
}
import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import ConfirmFooterUI from '../comps/ConfirmFooter';
import styled from 'styled-components';
import Image from 'next/image';
import {useState} from 'react';
import QuizButton from '../comps/QuizButton';
import ConfirmQuiz from '../comps/ConfirmQuiz';
import AnswerModelList2 from '../comps/QuizList2';

const Quiz2Cont = styled.div`
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

export default function Quiz2List() {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [modalDisplay, setModalDisplay] = useState(false);

    return <Quiz2Cont>
        <div className="Top">
            <QuizHeaderUI number="test" text2="POP QUIZ" text5="How many eggs do the Hawksbill Sea Turtles lay?"></QuizHeaderUI>
        </div>
        <div className="Mid">
            <QuizButton text="Scavenging for food" setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} id="1"></QuizButton><br/>
            <QuizButton text="Getting lost" setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} id="2"></QuizButton><br/>
            <QuizButton text="As soon as they hatch"setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} id="3"></QuizButton>
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
            <ConfirmQuiz setModalDisplay={setModalDisplay} ></ConfirmQuiz>
        </div>
        {modalDisplay ? 
            <AnswerModelList2 correct={selectedAnswer === "1"} answer="Sea turtles lay 130 to 160 eggs at a time"></AnswerModelList2> :
            <></>
        }
    </Quiz2Cont>
}
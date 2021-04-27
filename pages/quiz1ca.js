import QuizHeaderUI from '../comps/Header/TopHeaderQuiz';
import ButtonUI from '../comps/Button';
import FooterUI from '../comps/Footer';
import styled from 'styled-components';
import WhiteTextUI from '../comps/WhiteText';
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
            <WhiteTextUI fontsize="24" text="Wrong!"></WhiteTextUI>
            <ButtonUI text="10 to 40" bgcolor="#FF6464" routeTo=""></ButtonUI>
            <WhiteTextUI fontsize="20" text="Want to try again?"></WhiteTextUI>
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
            <FooterUI bgcolor="#FFE9A7" buttona="Try Again" buttonb="Pass" routeb="/redyoung" routea="/quiz1"></FooterUI>
        </div>
    </Quiz1Cont>
}
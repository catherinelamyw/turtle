import styled from "styled-components"
import ButtonUI from "../Button"
import SmallButtonUI from "../SmallButton"
import CheckMarkUI from "../CheckMark"
import WhiteTextUI from "../WhiteText"
import XMark from "../XMark"

const AnswerModalCont = styled.div`
align-items: center:
justify-content: center;
display: flex;
flex-direction: coloumn;
z-index: 3;
position: absolute;

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
    width: 300px;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

.icons {
    position: absolute;
    z-index: 5;
    top: 200px;
}

`

export default function AnswerModel({
    correct,
    answer
}) {
    return (
        <AnswerModalCont>
            <div className="cBox">
                <div className="icons">{correct ? <CheckMarkUI/> : <XMark/>}</div>
                <div className="cText">
                    {correct ? <CheckMarkUI/> : <XMark/>}
                    <WhiteTextUI parwidth="250" text={correct ? "CORRECT!" : "INCORRECT"} fontsize="36" fontcolor={correct ? "#468329" : "#FF6464"}></WhiteTextUI>
                    <WhiteTextUI parwidth="250" text={correct ? answer : "Try again or skip this quiz"} fontsize="20" fontcolor="#242C3C"></WhiteTextUI><br/><br/>
                    <div className="row">
                        {
                            correct ?
                                <SmallButtonUI text="Quiz 2" routeTo="/q2list"></SmallButtonUI>
                                 :
                                (
                                    <>
                                        <SmallButtonUI text="Try Again" routeTo="/q1list"></SmallButtonUI>
                                        <SmallButtonUI text="Pass" routeTo="/q2list"></SmallButtonUI>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </AnswerModalCont>
    )
}
import React from 'react';

function ContentUI({
    fColor="#242C3C",
    fSize="16px",
    lHeight="21px",
    tHeight="352px",
    tWidth="177px",
    Top="72px"
}){
    return <div style={{
        width={tWidth},
        height={tHeight},
        color={fColor},
        fontSize={fSize},
        textAlign="center",
        flexDirection="column",
        display="flex",
        lineHeight={lHeight},
        position="absolute",
        top={Top}
    }}>
        <b>Team Members</b>
        Catherine<br></br>
        Farbod<br></br>
        Mateo<br></br>
        <br></br>
        <br></br>
        <b>Topics</b>
        Social Awareness<br></br>
        Climate Change<br></br>
        <br></br>
        <br></br>
        <b>Goals</b>
        To educate using interactive storytelling
    </div>
}

export default ContentUI;
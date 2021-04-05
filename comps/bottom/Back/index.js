import React from 'react';

function BackUI ({
    width= "375px",
    height= "110px",
    bradius= "20px 20px 0px 0px",
    bgcolor= "#242C3C"
}){
    return <div style={{
        width= {width},
        height= {height},
        borderRadius= {bradius},
        backgroundColor= {bgcolor},
        display= "flex",
        alignItems= "center",
        justifyContent= "space-evenly",
        flexDirection="row"
    }}></div>
}

export default BackUI;
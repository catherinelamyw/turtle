import React from 'react';

function ConfirmButtonUI ({
    width= "122px",
    height= "43px",
    bradius= "224px",
    bgcolor= "#FFE9A7",
    bshadow= "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fcolor= "#242C3C",
    fsize= "16px",
    space= "0.5px",
}){
    return <button style={{
        textAlign="center",
        backgroundColor={bgcolor},
        borderRadius={bradius},
        width={width},
        height={height},
        boxShadow={bshadow},
        border="none",
        color={fcolor},
        fontSize={fsize},
        letterSpacing={space},
        fontWeight="bold",
    }}>Confirm</button>
}

export default ConfirmButtonUI;
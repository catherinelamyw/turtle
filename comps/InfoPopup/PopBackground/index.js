import React from 'react';

function PopBackgroundUI({
    pWidth="290px",
    pHeight="645px",
    bRadius="12px",
    bWidth="3px",
    bColor="#FFE9A7",
}){
    return <div style={{
        width={pWidth},
        height={pHeight},
        justifyContent="center",
        alignItems="center",
        display="flex",
        position="absolute",
        flexDirection="column",
        border="solid",
        borderColor={bColor},
        borderWidth={bWidth},
        borderRadius={bRadius},
    }}>
    </div>
}

export default PopBackgroundUI;
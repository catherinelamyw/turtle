import React from 'react';

function InfoButtonUI({
    Top="30px",
    Left="308px"
}){

    return <div style={{
        border= "none",
        display= "flex",
        position= "relative",
        top={Top},
        left={Left}
    }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M32.68 0C39.46 0 44 4.76 44 11.84V28.182C44 35.242 39.46 40 32.68 40H15.34C8.56 40 4 35.242 4 28.182V11.84C4 4.76 8.56 0 15.34 0H32.68ZM23.98 16.962C23.02 16.962 22.24 17.76 22.24 18.722V27.562C22.24 28.522 23.02 29.302 23.98 29.302C24.96 29.302 25.74 28.522 25.74 27.562V18.722C25.74 17.76 24.96 16.962 23.98 16.962ZM24.02 10.622C23.04 10.622 22.26 11.402 22.26 12.382C22.26 13.34 23.04 14.122 23.98 14.122C24.98 14.122 25.76 13.34 25.76 12.382C25.76 11.402 24.98 10.622 24.02 10.622Z" fill="#FFE9A7"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    </div>
}

export default InfoButtonUI;
import React from 'react'
import HeaderUI from "../comps/Header/TopHeader"
import HeaderPullDownUI from "../comps/Header/TopHeaderPullDown"
import HamburgerMenuUI from "../comps/Header/HamburgerMenuUI"
import HamburgerIcon from "../comps/Header/HamburgerIcon"

export default {
    title: "Example/Header",
    component: <HeaderUI />
}

export const defaultHeader = () => <HeaderUI
    text1="filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler"
    arrowrotation="rotate(-135deg)"
/>

export const HeaderPullDown = () => <HeaderPullDownUI
    arrowrotation="rotate(45deg)"
    text1="filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler"
    text2="filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler "
    text3="filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler"
    height="657px"
    width="365px"
    
/>

export const HamburgerMenu = () => <HamburgerMenuUI
    arrowrotation="rotate(-45deg)"
    arrowrotationC="rotate(225deg)"
    text="Timeline & Pages"
    height="812px"
    width="269px"

/>

export const HamburgerIconUI = () => <HamburgerIcon />
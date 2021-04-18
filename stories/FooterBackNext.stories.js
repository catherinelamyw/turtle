import React from 'react';
import FooterUI from '../comps/Footer'
import ConfirmFooterUI from '../comps/ConfirmFooter'
import SmallButtonInput from '../comps/SmallButton';

export default {
    title:"Example/Footer",
    component: <FooterUI />
}

export const BackNext = () => <FooterUI />

export const Confirm = () => <ConfirmFooterUI><SmallButtonInput bgcolor='#FFE9A7'></SmallButtonInput></ConfirmFooterUI>

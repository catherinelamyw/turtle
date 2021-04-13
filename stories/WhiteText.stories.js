import React from 'react';
import WhiteTextUI from '../comps/WhiteText';

export default {
  title:"Example/WhiteText",
  component:<WhiteTextUI />
}

export const DefaultText = () => <WhiteTextUI />

export const ChangedText = () => <WhiteTextUI text="Illegal dumpers caused an oil spill, and Shelly must resurface soon in order to breathe." />
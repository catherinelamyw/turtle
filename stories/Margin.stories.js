import React from 'react';
import MarginUI from '../comps/Margin';

export default {
  title:"Example/Margin",
  component:<MarginUI />
}

export const DefaultMargin = () => <MarginUI />
export const BottomMarginBig = () => <MarginUI text="What is a positive change you 
can make in your kitchen?" buttona="Install a food garbage disposal in your sink" buttonb="Choose environmentally- friendly cleaning products" buttonc="Wash greasy plates in the sink"/>
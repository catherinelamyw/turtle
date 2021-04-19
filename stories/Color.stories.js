import React from 'react';
import ColorUI from '../comps/Color';

export default {
  title:"Example/Color",
  component:<ColorUI />
}

export const DefaultGreen = () => <ColorUI />

export const ColorBrown = () => <ColorUI color="#8C6239"/>

export const ColorBlack = () => <ColorUI color="#272C3B"/>
import React from 'react';
import ButtonUI from '../comps/Button';

export default {
  title:"Example/Button",
  component:<ButtonUI />
}

export const DefaultButton = () => <ButtonUI />

export const ButtonSmall = () => <ButtonUI width="120" text="Next" />

export const ButtonOnPage = () => <ButtonUI width="245" text="START READING" />

export const ButtonWithTwoLines = () => <ButtonUI text="Wash your clothes with phosphate-free detergents" />

export const YellowButton = () => <ButtonUI bgcolor="#FFE9A7" text="Color yellow" />;

export const WhiteButton = () => <ButtonUI bgcolor="#F0F0F0" text="Color white" />;

export const RedButton = () => <ButtonUI bgcolor="#FF6464" text="Color red" />;
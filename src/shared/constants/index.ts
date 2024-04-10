import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const GIFT_IMAGE = require('shared/assets/png/gift.png');

export const HEADER_GRADIENT = ['#000000', 'rgba(0,0,0,0.99)', 'rgba(0,0,0,0.96)', 'rgba(0,0,0,0.91)', 'rgba(0,0,0,0.85)', 'rgba(0,0,0,0.76)', 'rgba(0,0,0,0.66)', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.44)', 'rgba(0,0,0,0.33)', 'rgba(0,0,0,0.23)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.08)', 'rgba(0,0,0,0.036)', 'rgba(0,0,0,0.008)', 'rgba(0,0,0,0.0)'];
export const HEADER_GRADIENT_REVERSED = [
  'rgba(0,0,0,0.0)',
  'rgba(0,0,0,0.008)',
  'rgba(0,0,0,0.0355)',
  'rgba(0,0,0,0.08)',
  'rgba(0,0,0,0.14)',
  'rgba(0,0,0,0.23)',
  'rgba(0,0,0,0.33)',
  'rgba(0,0,0,0.44)',
  'rgba(0,0,0,0.55)',
  'rgba(0,0,0,0.66)',
  'rgba(0,0,0,0.76)',
  'rgba(0,0,0,0.85)',
  'rgba(0,0,0,0.91)',
  'rgba(0,0,0,0.96)',
  'rgba(0,0,0,0.99)',
  '#000000'
];

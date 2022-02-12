import {Dimensions} from 'react-native';

const designWidth = 375;
const designHeight = 800;
const {width, height} = Dimensions.get('window');
const rateW = width / designWidth;
const rateH = height / designHeight;

export const DIMENTIONS = {
  rateW,
  rateH,
  calcWidth: (value: number) => value * rateW,
  calcHeight: (value: number) => value * rateH,
  width,
  height,
  d5: 5 * rateW,
  d6: 6 * rateW,
  d8: 8 * rateW,
  d10: 10 * rateW,
  d12: 12 * rateW,
  d14: 14 * rateW,
  d15: 15 * rateW,
  d16: 16 * rateW,
  d18: 18 * rateW,
  d20: 20 * rateW,
  d25: 25 * rateW,
  d30: 30 * rateW,
  d35: 35 * rateW,
};

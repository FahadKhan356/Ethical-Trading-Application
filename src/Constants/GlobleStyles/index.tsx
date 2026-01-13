import {StyleSheet} from 'react-native';
import {SIZES} from '../SIZES';

const GlobalStyles = StyleSheet.create({
  loadView: {
    height: SIZES.height70,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default GlobalStyles;

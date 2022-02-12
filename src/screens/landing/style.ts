import {StyleSheet} from 'react-native';
import {DIMENTIONS} from '../../themes';
export const styles = StyleSheet.create({
  controlContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
    marginBottom: DIMENTIONS.d10,
  },
  spacing: {
    height: DIMENTIONS.d20,
  },
  loading: {
    marginTop: DIMENTIONS.d35 * 5,
  },
});

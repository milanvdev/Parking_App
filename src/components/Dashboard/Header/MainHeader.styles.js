import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 16,
  },
  greeting: {
    fontFamily: Fonts.LexedMedium,
    fontSize: 20,
  },
  userName: {
    fontFamily: Fonts.LexedLight,
    fontSize: 16,
  },
});

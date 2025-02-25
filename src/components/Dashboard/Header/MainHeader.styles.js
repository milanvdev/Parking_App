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
  imageContainer: {
    width: 50,
    height: 50,
  },
  userImage: {
    width: '100%',
    height: '100%',
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
  notificationContainer: {
    borderColor: 'rgba(185, 184, 177, 0.2)',
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
});

import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  iconButton: {
    alignItems: 'center',
    width: '47%',
  },
  descriptionContainer: {
    paddingBottom: 16,
    marginVertical: 30,
    borderBottomColor: 'rgba(185, 184, 177, 0.1)',
    borderBottomWidth: 1,
  },
  titleText: {
    color: '#14130E',
    fontFamily: Fonts.LexedMedium,
    fontSize: 16,
  },
  descriptionText: {
    paddingTop: 10,
    color: '#14130E',
    fontFamily: Fonts.LexedLight,
    lineHeight: 22,
    fontSize: 14,
  },
  parkingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

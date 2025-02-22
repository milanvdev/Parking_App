import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

export default StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  searchContainer: {
    paddingTop: 20,
  },
  vehicleTypeContainer: {
    paddingVertical: 30,
  },
  vehicleTypeText: {
    fontSize: 16,
    fontFamily: Fonts.LexedMedium,
  },
  card: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.LexedMedium,
  },
  location: {
    fontSize: 14,
    color: '#14130E',
    marginTop: 5,
    fontFamily: Fonts.LexedLight,
  },
});

import { StyleSheet } from 'react-native';
import { Fonts } from '../../../styles/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleTypeText: {
    fontSize: 16,
    fontFamily: Fonts.LexedMedium,
  },
  viewAllText: {
    color: '#FFD613',
    fontSize: 14,
    fontFamily: Fonts.LexedLight,
  },
});

import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

export default StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  searchBar: {
    marginRight: 10,
  },
  filterContainer: {
    backgroundColor: '#FFD613',
    width: 56,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  vehicleTypeContainer: {
    paddingVertical: 30,
  },
  vehicleTypeText: {
    fontSize: 16,
    fontFamily: Fonts.LexedMedium,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
  },
  cardLeft: {
    marginRight: 10,
    marginBottom: 10,
  },
  cardRight: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.LexedMedium,
    paddingTop: 10,
  },
  location: {
    fontSize: 14,
    color: '#14130E',
    paddingTop: 5,
    fontFamily: Fonts.LexedLight,
  },
});

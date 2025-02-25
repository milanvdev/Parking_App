import {StyleSheet} from 'react-native';
import {Fonts} from '../../../styles/fonts';

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
  card: {
    borderRadius: 16,
    marginTop: 20,
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    height: 130,
    overflow: 'hidden',
    borderRadius: 10,
  },
  locationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  locationName: {
    fontSize: 16,
    fontFamily: Fonts.LexedMedium,
    paddingVertical: 10,
  },
  locationAddress: {
    fontSize: 12,
    fontFamily: Fonts.LexedLight,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: Fonts.LexedLight,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: Fonts.LexedLight,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontFamily: Fonts.LexedLight,
    marginLeft: 5,
  },
  priceHighlight: {
    fontFamily: Fonts.LexedMedium,
  },
});

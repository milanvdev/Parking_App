/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import PopularLocationStyles from '../PopularLocations/PopularLocationCard.styles';
import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {CustomButton, IconButton, Layout} from '../../../common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CallIcon from '../../../assets/svg/CallIcon';
import GalleryIcon from '../../../assets/svg/GalleryIcon';
import ViewLocationDetailsStyle from './ViewLocationDetails.style';

const ViewLocationDetails = ({navigation, route}) => {
  const {data} = route?.params;

  const VehicleLocationCardItem = ({vehicle}) => {
    return (
      <View style={[PopularLocationStyles.card, {padding: 0, paddingTop: 20}]}>
        <View style={[PopularLocationStyles.imageContainer, {height: 200}]}>
          <Image
            source={vehicle.locationImg}
            style={[PopularLocationStyles.locationImage, {resizeMode: 'cover'}]}
          />
        </View>
        <Text style={PopularLocationStyles.locationName}>
          {vehicle.locationName}
        </Text>
        <Text style={PopularLocationStyles.locationAddress}>
          {vehicle.locationAddress}
        </Text>

        <View style={PopularLocationStyles.infoRow}>
          {/* Rating */}
          <View style={PopularLocationStyles.ratingContainer}>
            <AntDesignIcon name="star" size={20} color="#FFD613" />
            <Text style={PopularLocationStyles.ratingText}>
              {vehicle.locationRating}
            </Text>
          </View>

          {/* Location Distance */}
          <View style={PopularLocationStyles.locationContainer}>
            <Icon name="map-pin" size={20} />
            <Text style={PopularLocationStyles.locationText}>
              {vehicle.locationKm}km
            </Text>
          </View>

          {/* Price */}
          <View style={PopularLocationStyles.priceContainer}>
            <Text style={PopularLocationStyles.priceText}>
              <Text style={PopularLocationStyles.priceHighlight}>
                ${vehicle.locationPrice}
              </Text>
              /hr
            </Text>
          </View>
        </View>
        <View style={ViewLocationDetailsStyle.container}>
          <IconButton
            title="Call"
            icon={true}
            Icon={CallIcon}
            style={ViewLocationDetailsStyle.iconButton}
          />
          <IconButton
            title="Get Direction"
            icon={true}
            Icon={GalleryIcon}
            style={ViewLocationDetailsStyle.iconButton}
          />
        </View>

        <View style={ViewLocationDetailsStyle.descriptionContainer}>
          <Text style={ViewLocationDetailsStyle.titleText}>Descriptions</Text>
          <Text style={ViewLocationDetailsStyle.descriptionText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>

        <View>
          <Text style={ViewLocationDetailsStyle.titleText}>Parking Time</Text>
          <View style={ViewLocationDetailsStyle.parkingContainer}>
            <Text style={ViewLocationDetailsStyle.descriptionText}>Monday</Text>
            <Text style={ViewLocationDetailsStyle.descriptionText}>
              10:00 AM - 12:00 PM
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Layout>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} />
      </TouchableOpacity>
      <VehicleLocationCardItem
        vehicle={data}
        key={data?.id}
        navigation={navigation}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingVertical: 10,
        }}>
        <CustomButton title="Find Slot" />
      </View>
    </Layout>
  );
};

export default ViewLocationDetails;

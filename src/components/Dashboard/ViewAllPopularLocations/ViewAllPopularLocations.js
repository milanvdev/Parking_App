import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {Layout} from '../../../common';
import Icon from 'react-native-vector-icons/Ionicons';
import {vehicleLocation} from '../../../data/vehicleTypes';
import PopularLocationStyles from '../PopularLocations/PopularLocationCard.styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DollarIcon from '../../../assets/svg/DollarIcon';

const VehicleLocationCardItem = ({vehicle, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={PopularLocationStyles.card}
      onPress={() => navigation.navigate('LocationDetails', {data: vehicle})}>
      <View style={PopularLocationStyles.imageContainer}>
        <Image
          source={vehicle.locationImg}
          style={PopularLocationStyles.locationImage}
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
          <AntDesignIcon name="star" size={18} color="#FFD613" />
          <Text style={PopularLocationStyles.ratingText}>
            {vehicle.locationRating}
          </Text>
        </View>

        {/* Location Distance */}
        <View style={PopularLocationStyles.locationContainer}>
          <FeatherIcon name="map-pin" size={18} />
          <Text style={PopularLocationStyles.locationText}>
            {vehicle.locationKm}km
          </Text>
        </View>

        {/* Price */}
        <View style={PopularLocationStyles.priceContainer}>
          <DollarIcon />
          <Text style={[PopularLocationStyles.priceText]}>
            <Text style={PopularLocationStyles.priceHighlight}>
              ${vehicle.locationPrice}
            </Text>
            /hr
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ViewAllPopularLocations = ({navigation}) => {
  return (
    <Layout>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} />
      </TouchableOpacity>
      <View>
        <FlatList
          data={vehicleLocation}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          renderItem={({item}) => (
            <VehicleLocationCardItem vehicle={item} navigation={navigation} />
          )}
        />
      </View>
    </Layout>
  );
};

export default ViewAllPopularLocations;

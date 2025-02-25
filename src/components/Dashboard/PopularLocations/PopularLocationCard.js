import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import PopularLocationStyles from './PopularLocationCard.styles';
import {vehicleLocation} from '../../../data/vehicleTypes';
import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const VehicleLocationCardItem = ({vehicle, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={PopularLocationStyles.card}
      onPress={() =>
        navigation.navigate('LocationDetails', {
          data: vehicle,
        })
      }>
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
    </TouchableOpacity>
  );
};

const PopularLocationCard = ({navigation}) => {
  return (
    <View>
      <View style={PopularLocationStyles.header}>
        <Text style={PopularLocationStyles.vehicleTypeText}>Vehicle Type</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ViewAllPopularLocations')}>
          <Text style={PopularLocationStyles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={vehicleLocation}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        renderItem={({item}) => (
          <VehicleLocationCardItem vehicle={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default PopularLocationCard;

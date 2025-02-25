/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {vehicleTypes} from '../../../data/vehicleTypes';
import styles from './VehicleTypeCard.styles';
import SearchBar from '../../../common/SearchBar';
import FilterIcon from '../../../assets/svg/FilterIcon';

const VehicleTypeCardItem = ({vehicle, index}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.card,
        index % 2 === 0 ? styles.cardLeft : styles.cardRight,
      ]}>
      {vehicle.img}
      <Text style={styles.name}>{vehicle.name}</Text>
      <Text style={styles.location}>{vehicle.location} Locations</Text>
    </TouchableOpacity>
  );
};

const VehicleTypeCard = () => {
  return (
    <View>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <SearchBar style={{marginRight: 10}} />
        <TouchableOpacity activeOpacity={0.7} style={styles.filterContainer}>
          <FilterIcon />
        </TouchableOpacity>
      </View>

      {/* Vehicle Type Section */}
      <View style={styles.vehicleTypeContainer}>
        <Text style={styles.vehicleTypeText}>Vehicle Type</Text>

        {/* Grid List of Vehicle Types */}
        <FlatList
          data={vehicleTypes}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({item, index}) => (
            <VehicleTypeCardItem vehicle={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default VehicleTypeCard;

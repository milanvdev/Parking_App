import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {vehicleTypes} from '../../../data/vehicleTypes';
import styles from './VehicleTypeCard.styles';

const VehicleTypeCardItem = ({vehicle}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{vehicle.name}</Text>
      <Text style={styles.location}>{vehicle.location} Locations</Text>
    </View>
  );
};

const VehicleTypeCard = () => {
  return (
    <View>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Text>Search Input</Text>
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
          renderItem={({item}) => <VehicleTypeCardItem vehicle={item} />}
        />
      </View>
    </View>
  );
};

export default VehicleTypeCard;

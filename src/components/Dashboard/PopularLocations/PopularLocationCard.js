import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PopularLocationStyles from './PopularLocationCard.styles';

const PopularLocationCard = () => {
  return (
    <View>
      <View style={PopularLocationStyles.header}>
        <Text style={PopularLocationStyles.vehicleTypeText}>Vehicle Type</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={PopularLocationStyles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularLocationCard;

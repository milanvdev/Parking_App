import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MainHeaderStyles from './MainHeader.styles';
import AvatarIcon from '../../../assets/svg/AvatarIcon';
import NotificationIcon from '../../../assets/svg/NotificationIcon';

const MainHeader = () => {
  return (
    <View style={MainHeaderStyles.container}>
      <View style={MainHeaderStyles.userInfo}>
        <View style={MainHeaderStyles.imageContainer}>
          <AvatarIcon />
        </View>
        <View style={MainHeaderStyles.userText}>
          <Text style={MainHeaderStyles.greeting}>Good Morning</Text>
          <Text style={MainHeaderStyles.userName}>Mark Johnson</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={MainHeaderStyles.notificationContainer}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

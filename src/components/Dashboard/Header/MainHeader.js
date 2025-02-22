import React from 'react';
import {View, Text} from 'react-native';
import MainHeaderStyles from './MainHeader.styles';

const MainHeader = () => {
  return (
    <View style={MainHeaderStyles.container}>
      <View style={MainHeaderStyles.userInfo}>
        <Text>UserIcon</Text>
        <View style={MainHeaderStyles.userText}>
          <Text style={MainHeaderStyles.greeting}>Good Morning</Text>
          <Text style={MainHeaderStyles.userName}>Mark Johnson</Text>
        </View>
      </View>
      <View>
        <Text>NotificationIcon</Text>
      </View>
    </View>
  );
};

export default MainHeader;

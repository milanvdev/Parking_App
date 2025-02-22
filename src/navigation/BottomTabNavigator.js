import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import BookingScreen from '../screens/BookingScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({color, size}) => {
        //   let iconName;

        //   if (route.name === 'Home') {
        //     iconName = 'home-outline';
        //   } else if (route.name === 'Discover') {
        //     iconName = 'search-outline';
        //   } else if (route.name === 'Booking') {
        //     iconName = 'calendar-outline';
        //   } else if (route.name === 'Profile') {
        //     iconName = 'person-outline';
        //   }

        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFD613',
        tabBarInactiveTintColor: '#14130E',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import BookingScreen from '../screens/BookingScreen';
import DashboardNavigator from './DashboardNavigator';
import HomeIcon from '../assets/svg/HomeIcon';
import DiscoverIcon from '../assets/svg/DiscoverIcon';
import BookIcon from '../assets/svg/BookIcon';
import ProfileIcon from '../assets/svg/ProfileIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return <HomeIcon stroke={color} />;
          } else if (route.name === 'Discover') {
            return <DiscoverIcon stroke={color} />;
          } else if (route.name === 'Booking') {
            return <BookIcon stroke={color} />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon fill={color} stroke={color} />;
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFD613',
        tabBarInactiveTintColor: '#14130E',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={DashboardNavigator} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

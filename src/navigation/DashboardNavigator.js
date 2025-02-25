import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import ViewAllPopularLocations from '../components/Dashboard/ViewAllPopularLocations/ViewAllPopularLocations';
import ViewLocationDetails from '../components/Dashboard/ViewLocationDetails/ViewLocationDetails';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardHome" component={HomeScreen} />
      <Stack.Screen
        name="ViewAllPopularLocations"
        component={ViewAllPopularLocations}
      />
      <Stack.Screen name="LocationDetails" component={ViewLocationDetails} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
